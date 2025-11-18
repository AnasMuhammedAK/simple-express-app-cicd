import { Request, Response } from "express";
import userService from "../../services/user/user.service.js";
import { getCache, setCache } from "../../utils/redisCache.js";

export const getAllUsers = async (req: Request, res: Response) => {
  const redisClient = req.app.locals.redisClient;
  const data = await getCache(redisClient, "all-users");

  if (!data?.length) {
    const users = await userService.getUsers();
    await setCache(redisClient, "all-users", users, 1800);
    res.json(users);
  } else res.json(data);
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
