import { users } from "../modals/userStore.js";
import { products } from "../modals/productStore.js";
import { movies } from "../modals/moviesStore.js";

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

export const userProducts = (req,res) => {
  if (!products.length) {
    return res.status(404).json({ error: "No products found" });
  }
  return res.json({
    message: "Success",
    products,
  });
};



export const userMovies = (req,res) => {
  if (!movies.length) {
    return res.status(404).json({ error: "No movie found" });
  }
  return res.json({
    message: "Success",
    movies,
  });
};
