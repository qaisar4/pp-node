import bcrypt from "bcrypt";
import { generateToken } from "../services/jwtServices.js";
import { isEmail } from "../utils/emailValidator.js";
import { addUser, users } from "../modals/userStore.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  // validation
 if (!username) return res.status(400).json({ error: "Missing username" });
  if (!email) return res.status(400).json({ error: "Missing email" });
  if (!isEmail(email)) return res.status(400).json({ error: "Invalid email format" });
  if (!password) return res.status(400).json({ error: "Missing password" });

  // check if user already exists in memory
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return res.status(400).json({ error: "User already registered" });
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // simulate saving user
  const newUser = { username, email, password: hashedPassword };
  addUser(newUser);

  // generate token
  const token = generateToken(newUser);

  return res.status(201).json({
    token,
    message: "User registered successfully",
    user: { username, email }, // don’t send password
  });
};


export const login = async (req, res) => {
  const { email, password } = req.body;

  // validation


    if (!email) return res.status(400).json({ error: "Missing email" });
  if (!isEmail(email)) return res.status(400).json({ error: "Invalid email format" });
  if (!password) return res.status(400).json({ error: "Missing password" });

  // find user in memory
  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  // compare password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ error: "Invalid password" });
  }

  // generate token
  const token = generateToken(user);

  return res.status(200).json({
    token,
    message: "User logged in successfully",
    user: { username: user.username, email: user.email },
  });
};
