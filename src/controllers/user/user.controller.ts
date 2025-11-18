import { Request, Response } from "express";
import userService from "../../services/user/user.service.js";

export const getAllUsers = async (_req: Request, res: Response) => {
  const users = await userService.getUsers();
  res.json(users);
};

export const getUserData = async (req: Request, res: Response) => {
  const user = await userService.getUserById(req.params.id);
  if (!user) return res.status(404).json({ message: "Not found" });
  res.json(user);
};

export const createUser = async (req: Request, res: Response) => {
  const created = await userService.createUser(req.body);
  res.status(201).json(created);
};

export const updateUser = async (req: Request, res: Response) => {
  const updated = await userService.updateUser(req.params.id, req.body);
  if (!updated) return res.status(404).json({ message: "Not found" });
  res.json(updated);
};

export const deleteUser = async (req: Request, res: Response) => {
  const deleted = await userService.deleteUser(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Not found" });
  res.json({ message: "deleted" });
};