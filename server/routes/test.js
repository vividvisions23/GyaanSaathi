import express from "express";
import {
  createTest,
  deleteTest,
  getTest,
  getTests,
  updateTest,
} from "../controllers/test.js";

const router = express.Router();

router.post("/", createTest);
router.put("/:id", updateTest);
router.delete("/:id", deleteTest);
router.get("/:id", getTest);
router.get("/", getTests);

export default router;
