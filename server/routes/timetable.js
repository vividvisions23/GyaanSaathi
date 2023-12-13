import express from "express";
import {
  createTimetable,
  deleteTimetable,
  getTimetable,
  getTimetables,
  updateTimetable,
} from "../controllers/timetable.js";

const router = express.Router();

router.post("/", createTimetable);
router.put("/:id", updateTimetable);
router.delete("/:id", deleteTimetable);
router.get("/:id", getTimetable);
router.get("/", getTimetables);

export default router;