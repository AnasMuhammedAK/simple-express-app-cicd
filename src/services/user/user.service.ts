import UserModel, { IUser } from "../../models/user.model.js";

const getUsers = async (): Promise<IUser[]> => {
  return UserModel.find()
};

const getUserById = async (id: string): Promise<IUser | null> => {
  return UserModel.findById(id)
};

const createUser = async (data: Partial<IUser>): Promise<IUser> => {
  const user = new UserModel(data);
  return user.save();
};

const updateUser = async (id: string, data: Partial<IUser>): Promise<IUser | null> => {
  return UserModel.findByIdAndUpdate(id, data, { new: true, runValidators: true })
};

const deleteUser = async (id: string): Promise<IUser | null> => {
  return UserModel.findByIdAndDelete(id)
};

export default {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};