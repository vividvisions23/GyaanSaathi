import Course from "../models/Course.js";
import { departments } from "../utils/array.js";

function generateClassCode(semester, department) {
  const index = departments.findIndex(d => d.name === department)
  return `${departments[index].code}-${semester}`;
}

export const createCourse = async (req, res, next) => {

  const department = req.body.department;
  const semester = req.body.semester;
  const code = generateClassCode(semester, department)

  const newCourse = new Course({...req.body,classCode: code });
  try {
    const savedCourse = await newCourse.save();
    res.status(200).json(savedCourse);
  } catch (err) {
    next(err);
  }
};

export const updateCourse = async (req, res, next) => {
  try {
    
    const department = req.body.department;
    const semester = req.body.semester;
    const code = generateClassCode(semester, department)
    
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      { $set: {...req.body, classCode: code }},
      { new: true }
    );
    res.status(200).json(course);
  } catch (err) {
    next(err);
  }
};

export const deleteCourse = async (req, res, next) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(200).json("the Course has been deleted");
  } catch (err) {
    next(err);
  }
};

export const getCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);
    res.status(200).json(course);
  } catch (err) {
    next(err);
  }
};

export const getCourses = async (req, res, next) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    next(err)
  }
}
