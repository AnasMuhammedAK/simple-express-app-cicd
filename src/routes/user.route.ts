import { Router } from "express";
import {
  getAllUsers,
  getUserData,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user/user.controller.js";

const router = Router();
router.get("/", getAllUsers);
router.get("/:id", getUserData);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;