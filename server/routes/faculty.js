import express from "express";
import {
  registerFaculty,
  loginFaculty,
  updateFaculty,
  deleteFaculty,
  getFaculty,
  getFacultys,
  teacherAttendance,
} from "../controllers/faculty.js";

const router = express.Router();

router.post("/registerFaculty", registerFaculty);
router.post("/loginFaculty", loginFaculty);
router.put("/:id", updateFaculty);
router.delete("/:id", deleteFaculty);
router.get("/:id", getFaculty);
router.get("/", getFacultys);
router.post('/TeacherAttendance/:id', teacherAttendance);

export default router;