import Test from "../models/Test.js";
import Student from "../models/Student.js";

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
    const test = await Test.findById(req.params.id)
      .populate('sclass', 'name')
      .populate('author', 'teachername')
      .populate('subject', 'name')

    res.status(200).json(test);
  } catch (err) {
    next(err);
  }
};

export const getSingleTest = async (req, res, next) => {
  try {
    const test = await Test.findById(req.params.id);
    res.status(200).json(test);
  } catch (err) {
    next(err);
  }
};

// faculty can see his/her tests
export const getFacultyTests = async (req, res, next) => {
  const facultyId = req.params.id;
  
  try {
    const tests = await Test.find({author: facultyId});
    res.status(200).json(tests);
  } catch (err) {
    next(err)
  }
}

// student can see his/her tests
export const getStudentTests = async (req, res, next) => {
  const classId = req.params.id;
  
  try {
    const tests = await Test.find({sclass: classId});
    res.status(200).json(tests);
  } catch (err) {
    next(err)
  }
}

export const addMarks = async(req, res, next) => {
  const {student_id, value} = req.body;

  try {
    const test = await Test.findById(req.params.id);
    const student = await Student.findById(student_id);
    const pace = student.pace;
    if(!test)
      return res.status(404).json({message: "Test not found"})

    else {
      test.marks.push({student_id, value, pace})
      const result = await test.save();
      return res.send(result);
    }
  }

  catch(err) {
    next(err)
  }
}
