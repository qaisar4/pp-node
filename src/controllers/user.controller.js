import { users } from "../modals/userStore.js";

export const userProfile = (req, res) => {
  const email = req.user.email;
  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.json({
    message: "Success",
    user: { username: user.username, email: user.email },
  });
};