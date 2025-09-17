import fs from "fs";
const filePath = "src/users.json";

export const loadUsers = () => {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

export const saveUsers = (users) => {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};

export let users = loadUsers();

export const addUser = (user) => {
  users.push(user);
  saveUsers(users);
};