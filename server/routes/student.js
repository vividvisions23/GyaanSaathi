import express from "express";
import {
  registerStudent,
  loginStudent,
  updateStudent,
  deleteStudent,
  getStudent,
  getStudents,
  clearAllStudentsAttendanceBySubject,
  clearAllStudentsAttendance,
  removeStudentAttendanceBySubject,
  removeStudentAttendance,
  studentAttendance,
} from "../controllers/student.js";

const router = express.Router();

router.post("/registerStudent", registerStudent);
router.post("/loginStudent", loginStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);
router.get("/:id", getStudent);
router.get("/", getStudents);
router.put('/StudentAttendance/:id', studentAttendance)
router.put('/ClearAllStudentsSubAtten/:id', clearAllStudentsAttendanceBySubject);
router.put('/ClearAllStudentsAtten/:id', clearAllStudentsAttendance);
router.put('/RemoveStudentSubAtten/:id', removeStudentAttendanceBySubject);
router.put('/RemoveStudentAtten/:id', removeStudentAttendance);
export default router;