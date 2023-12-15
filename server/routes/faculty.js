import express from "express";
import {
  registerFaculty,
  loginFaculty,
  updateFaculty,
  deleteFaculty,
  getFaculty,
  getFacultys,
  facultyAttendance,
} from "../controllers/faculty.js";

const router = express.Router();

router.post("/registerFaculty", registerFaculty);
router.post("/loginFaculty", loginFaculty);
router.put("/:id", updateFaculty);
router.delete("/:id", deleteFaculty);
router.get("/:id", getFaculty);
router.get("/", getFacultys);
router.post('/facultyAttendance/:id', facultyAttendance);

export default router;