import fs from "fs";
const filePath = "src/userMovies.json";

export const loadMovies = () => {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

export let movies = loadMovies();