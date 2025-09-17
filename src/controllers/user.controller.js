export const userProfile = (req, res) => {
  return res.json({
    message: "Welcome to your profile!",
    user: req.user, // comes from decoded JWT payload
  });
};
