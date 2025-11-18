import { users } from "../../utils/users.js";

  const getUsers = async () => {
  return await users
};

  const getUserData = async (id) => {
  return await users.find((item)=>item.id==id)
};
const createUser =async (data:any={})=>{
  const nextId = (users.at(-1)?.id ?? 0) + 1;
  const newUser = {
    id: nextId,
    name: data.name ?? "Unnamed",
    email: data.email ?? "",
    age: data.age ?? 0,
    role: data.role ?? "user",
    status: data.status ?? "active",
    createdAt: new Date().toISOString().slice(0, 10),
  };
  users.push(newUser);
  return newUser;
}



export default {
  getUsers,
  getUserData,createUser
};