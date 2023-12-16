import Faculty from "../models/Faculty.js";
import Course from "../models/Course.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";


export const registerFaculty = async (req, res, next) => {
  try {

    const em = await Faculty.findOne({ email: req.body.email });
    if (em)
      return res.status(409).send({ message: "User with given email already exists" })

      const password = req.body.password;
      console.log(password);

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newFaculty = new Faculty({
      ...req.body,
      password: hash,
    });

    try {
      // Extract the classes for the given subjects
      const classesForSubjects = await Course.find({ _id: { $in: newFaculty.subjectsTaught } })
      .distinct('class')
      .exec();

      // Update the faculty's classesTaught field
      newFaculty.classesTaught = [...new Set([...faculty.classesTaught, ...classesForSubjects])];

    }
    catch(err) {
      next(err)
    }

    await newFaculty.save();
    res.status(200).send(newFaculty);
  } catch (err) {
    next(err);
  }
};


export const loginFaculty = async (req, res, next) => {
  try {
    const user = await Faculty.findOne({ username: req.body.username });
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

export const updateFaculty = async (req, res, next) => {
  try {
    const updatedFaculty = await Faculty.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedFaculty);
  } catch (err) {
    next(err);
  }
};

export const deleteFaculty = async (req, res, next) => {
    try {
      await Faculty.findByIdAndDelete(req.params.id);
      res.status(200).json("the Faculty has been deleted");
    } catch (err) {
      next(err);
    }
  };
  
  export const getFaculty = async (req, res, next) => {
    try {
      const faculty = await Faculty.findById(req.params.id).populate('subjectsTaught');
      res.status(200).json(faculty);
    } catch (err) {
      next(err);
    }
  };
  
  export const getFacultys = async (req, res, next) => {
    try {
      const facultys = await Faculty.find().populate('subjectsTaught');
      
      res.status(200).json(facultys);
    } catch (err) {
      next(err)
    }
  }

  export const getFacultyClasses = async(req, res, next) => {
    try{
      const faculty = await Faculty.findById(req.params.id).populate('classesTaught', 'name')
      
    const classes = faculty.classesTaught.map((sclass) => ({
      _id: sclass._id,
      name: sclass.name,
    }));

    res.status(200).json(classes);
    }
    catch (err){
      next(err)
    }
  }
  export const facultyAttendance = async (req, res, next) => {
    const { status, date } = req.body;
  
    try {
      const faculty = await Faculty.findById(req.params.id);
  
      if (!faculty) {
        return res.send({ message: "Faculty not found" });
      }
  
      const existingAttendance = faculty.attendance.find(
        (a) => a.date.toDateString() === new Date(date).toDateString()
      );
  
      if (existingAttendance) {
        existingAttendance.status = status;
      } else {
        faculty.attendance.push({ date, status });
      }
  
      const result = await faculty.save();
      return res.send(result);
    } catch (error) {
      next(error);
    }
  };



