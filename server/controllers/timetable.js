import Timetable from "../models/Timetable.js";

export const createTimetable = async (req, res, next) => {

  const newTimetable = new Timetable(req.body);
  try {
    const savedTimetable = await newTimetable.save();
    res.status(200).json(savedTimetable);
  } catch (err) {
    next(err);
  }
};

export const updateTimetable = async (req, res, next) => {
  try {
    const timetable = await Timetable.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(timetable);
  } catch (err) {
    next(err);
  }
};

export const deleteTimetable = async (req, res, next) => {
  try {
    await Timetable.findByIdAndDelete(req.params.id);
    res.status(200).json("the Timetable has been deleted");
  } catch (err) {
    next(err);
  }
};

export const getTimetable = async (req, res, next) => {
  try {
    const timetable = await Timetable.findById(req.params.id);
    res.status(200).json(timetable);
  } catch (err) {
    next(err);
  }
};

export const getTimetables = async (req, res, next) => {
  try {
    const timetables = await Timetable.find();
    res.status(200).json(timetables);
  } catch (err) {
    next(err)
  }
}
