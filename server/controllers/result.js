
// import Result from "../models/Result.js";
// import Test from "../models/Test.js";
// import Student from "../models/Student.js";
// import Course from "../models/Course.js";

// export const getResult = async (req, res, next) => {
//     try {
//         const marks = await Result.find({}); 
//         res.status(200).json(marks); 
//     } catch (error) {
//      res.status(500).json({message: error.message});    
//     }
// }

// export const getResultbyStudent = async (req, res, next) => {
//     try {
//         const {stu_id} = req.params; 
//         const student = await Student.findById(stu_id);  
//         if (!student){
//             //is the status correct? 
//             return res.status(404).json({message: `Cannot find any student`}); 
//         }
//         const marks = await Result.find({stu_id: student._id}); 
//         if (marks.length==0) {
//             return res.json({message: "Marks have not been uploaded for any subject till now! Please contact the admin if you think this is a mistake"})
//         }
//         res.status(200).json(marks); 
//     } catch (error) {
//      res.status(500).json({message: error.message});    
//     }
// }

// export const getResultbyTest = async (req, res, next) => {
//     try {

//         const {test_id} = req.params; 
//         const test = await Test.findById(test_id); 
//         if (!test){
//             return res.status(404).json({message: "Test doesn't exist"}); 
//         }
//         const result = await Result.find({test_id: test._id}); 
//         if (result.length==0){
//             return res.json({message: "No result for test! "}); 
//         }
//         res.status(200).json(result); 
//     }
//     catch(err){
//         res.status(500).json({message: err.message}); 
//     }
// }

// export const getResultbySubject = async (req, res, next) => {
//     //search by subj code
//     try{
//     const {subj_code} = req.params; 
//         const subject = await Course.findOne({subjectCode: subj_code}); 
//         if (!subject){
//             return res.status(404).json({message: "Subject doesn't exist"}); 
//         }
//         const result = await Result.find({subject_id: subject._id}); 
//         if (result.length==0){
//             return res.json({message: "No result for subject! "}); 
//         }
//         res.status(200).json(result); 
//     }
//     catch(err){
//         res.status(500).json({message: err.message}); 
//     }
// }

// export const addResult = async (req, res, next) => {
//     try {
//         const { subject_code, stu_enroll, marks, test_name } = req.body;
//         // Find the student by enrollment number
//         const student = await Student.findOne({ enroll: stu_enroll });

//         // Find subject by subject code
//         const subj = await Course.findOne({ subjectCode: subject_code }); 

//         // Find test by test
//         const test = await Test.findOne({ name: test_name }); 

//         if (!student) {
//             return res.status(404).json({ error: 'Student not found' });
//         }
        
//         if (!subj) {
//             return res.status(404).json({ error: 'Subject not found' });
//         }

//         if (!test) {
//             return res.status(404).json({ error: 'Test not found' });
//         }

//         const newResult = new Result({
//             subject_id: subj._id, 
//             subject_code,
//             stu_id: student._id,
//             stu_enroll,
//             test_id: test._id, 
//             test_name, 
//             marks,
//           });

//         /*
//          const newResult = new Result ({
//             subject_code, 
//             stu_enroll, 
//             marks, 
//          }); 
//          */
//           await newResult.save();
//           res.status(201).json({ message: 'Result created successfully', result: newResult });
//     } catch (error) {
//         res.status(500).json({message: error.message}); 
//     }
// }