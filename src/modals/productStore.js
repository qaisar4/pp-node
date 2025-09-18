import fs from "fs";
const filePath = "src/userProducts.json";

export const loadProducts = () => {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

export let products = loadProducts();