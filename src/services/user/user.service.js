import userData from "../../utils/users.json" with { type: "json" };

  const getUsers = async () => {
  return await userData
};

  const getUserData = async (id) => {
  return await userData.find((item)=>item.id==id)
};
const createUser =async (data={})=>{
  const nextId = (userData.at(-1)?.id ?? 0) + 1;
  const newUser = {
    id: nextId,
    name: data.name ?? "Unnamed",
    email: data.email ?? "",
    age: data.age ?? 0,
    role: data.role ?? "user",
    status: data.status ?? "active",
    createdAt: new Date().toISOString().slice(0, 10),
  };
  userData.push(newUser);
  return newUser;
}



export default {
  getUsers,
  getUserData,createUser
};