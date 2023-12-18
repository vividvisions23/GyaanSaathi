import express from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getSingleTask,
  updateTask,
  getFacultyTasks,
} from "../controllers/tasks.js";
import { verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.get("/:id", getTask);
router.get("/single/:id", getSingleTask);
router.get("/faculty/:id", getFacultyTasks);

export default router;
