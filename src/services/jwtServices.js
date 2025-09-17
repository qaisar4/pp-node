import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const { JWT_SECRET } = process.env;

export const generateToken = (user) => {
  const payload = {
    username: user.username,
    email: user.email,
  };
  const options = {
    expiresIn: "1h",
  };
  return jwt.sign(payload, JWT_SECRET, options);
};