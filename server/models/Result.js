//new file to be added

import mongoose from "mongoose";
const ResultSchema = new mongoose.Schema(
    {
        subject_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course', 
        }, 
        subject_code: {
            type: String, 
            required: true, 
        }, 
        subject_name: {
            type: String, 
        }, 
        stu_id: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Student', 
        }, 
        stu_enroll: {
            type: String, 
            required: true
        },
        test_id: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Test',
        },
        test_name : {
            type: String, 
            required: true
        },
        marks: {
            type: Number, 
            required: false 
        },
    
    }
); 

export default mongoose.model('Result', ResultSchema);
