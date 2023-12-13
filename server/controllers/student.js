import Student from "../models/Student.js";
import { semesters, departments } from "../utils/array.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

function generateClassCode(semester, department) {
  const index = departments.findIndex(d => d.name === department)
  return `${departments[index].code}-${semester}`;
}

export const registerStudent = async (req, res, next) => {
  try {

    const em = await Student.findOne({ email: req.body.email });
    if (em)
      return res.status(409).send({ message: "User with given email already exists" })

    const semester = req.body.semester
    const department = req.body.department
    const code = generateClassCode(semester, department);

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newStudent = new Student({
      ...req.body,
      password: hash,
      classCode: code
    });

    await newStudent.save();
    res.status(200).send("Student has been created.");
  } catch (err) {
    next(err);
  }
};


export const loginStudent = async (req, res, next) => {
  try {
    const user = await Student.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      { id: user._id},
      process.env.JWT
    );

    const { password, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      // sending all details except password
      .json({ details: { ...otherDetails } });
  } catch (err) {
    next(err);
  }
};

export const updateStudent = async (req, res, next) => {
  try {

    const semester = req.body.semester
    const department = req.body.department
    const code = generateClassCode(semester, department);

    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      { $set: {...req.body, classCode: code} },
      { new: true }
    );
    res.status(200).json(updatedStudent);
  } catch (err) {
    next(err);
  }
};

export const deleteStudent = async (req, res, next) => {
    try {
      await Student.findByIdAndDelete(req.params.id);
      res.status(200).json("the Student has been deleted");
    } catch (err) {
      next(err);
    }
  };
  
  export const getStudent = async (req, res, next) => {
    try {
      const student = await Student.findById(req.params.id);
      res.status(200).json(student);
    } catch (err) {
      next(err);
    }
  };
  
  export const getStudents = async (req, res, next) => {
    try {
      const students = await Student.find();
      res.status(200).json(students);
    } catch (err) {
      next(err)
    }
  }



