import express from "express";
import {
  createTest,
  deleteTest,
  getTest,
  getFacultyTests,
  getStudentTests,
  getSingleTest,
  updateTest,
  addMarks
} from "../controllers/test.js";

const router = express.Router();

router.post("/", createTest);
router.delete("/:id", deleteTest);
router.get("/faculty/:id", getFacultyTests);
router.get("/student/:id", getStudentTests);
router.get("/:id", getTest);
router.put("/:id", updateTest);
router.get("/single/:id", getSingleTest);
router.get("/addMarks/:id", addMarks);

export default router;
