import Faculty from "../models/Faculty.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";


export const registerFaculty = async (req, res, next) => {
  try {

    const em = await Faculty.findOne({ email: req.body.email });
    if (em)
      return res.status(409).send({ message: "User with given email already exists" })

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newFaculty = new Faculty({
      ...req.body,
      password: hash,
    });

    await newFaculty.save();
    res.status(200).send("Faculty has been created.");
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
      const faculty = await Faculty.findById(req.params.id).populate('subject');
      res.status(200).json(faculty);
    } catch (err) {
      next(err);
    }
  };
  
  export const getFacultys = async (req, res, next) => {
    try {
      const facultys = await Faculty.find().populate('subject');
      
      res.status(200).json(facultys);
    } catch (err) {
      next(err)
    }
  }



