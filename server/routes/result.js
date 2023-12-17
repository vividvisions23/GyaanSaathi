
import express from 'express'; 
import {getResult, getResultbyStudent, addResult, getResultbyTest, getResultbySubject} from '../controllers/result.js'; 

const router = express.Router(); 

router.get('/', getResult); 

router.get('/subject/:subj_code', getResultbySubject); 

router.get('/teacher/:subject', async (req, res) => {
    try {
        const {subject_code} = req.params; 
        const marks = await Result.find({ subject_code: subject_code }); 
        if (!marks){
            //is the status correct? 
            return res.status(404).json({message: `Cannot find any subject with subject name ${subj_name}`}); 
        }
        res.status(200).json(marks); 
    } catch (error) {
     res.status(500).json({message: error.message});    
    }
})


router.get('/student/:stu_id', getResultbyStudent);

router.get('/test/:test_id', getResultbyTest); 

// router.get('/student/:stu_id/test_id', getResultbyStudentTest); 

router.post('/', addResult); 


// router.get('/student/:enroll', async (req, res) => {
//     try {
//         const {enroll} = req.params; 
//         const marks = await Result.find({ stu_enroll: enroll }); 
//         if (marks.length ==0 ){
//             //is the status correct? 
//             return res.status(404).json({message: `Cannot find any student with enrollment number ${enroll}`}); 
//         }
//         res.status(200).json(marks); 
//     } catch (error) {
//      res.status(500).json({message: error.message});    
//     }
// })



export default router; 