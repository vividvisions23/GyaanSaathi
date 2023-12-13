import Test from "../models/Test.js";

export const createTest = async (req, res, next) => {

  const newTest = new Test(req.body);
  try {
    const savedTest = await newTest.save();
    res.status(200).json(savedTest);
  } catch (err) {
    next(err);
  }
};

export const updateTest = async (req, res, next) => {
  try {
    const test = await Test.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(test);
  } catch (err) {
    next(err);
  }
};

export const deleteTest = async (req, res, next) => {
  try {
    await Test.findByIdAndDelete(req.params.id);
    res.status(200).json("the Test has been deleted");
  } catch (err) {
    next(err);
  }
};

export const getTest = async (req, res, next) => {
  try {
    const test = await Test.findById(req.params.id);
    res.status(200).json(test);
  } catch (err) {
    next(err);
  }
};

export const getTests = async (req, res, next) => {
  try {
    const tests = await Test.find();
    res.status(200).json(tests);
  } catch (err) {
    next(err)
  }
}


