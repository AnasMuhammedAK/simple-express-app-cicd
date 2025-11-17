import { Router } from "express";
import {
  getAllUsers,
  createUser,
  getUserData,
} from "../controllers/user/user.controller.js";

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUserData);
router.post("/", createUser);

export default router;
