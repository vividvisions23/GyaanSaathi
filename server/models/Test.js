import mongoose from "mongoose";

const TestSchema = new mongoose.Schema(
    {
        name: {
            type: String, 
            required: true
        },
        subject_id: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Course', 
            required: false
        },
        syllabus: {
            type: String,
            required: true
        },
        duration: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        }, 
        author: {
            type: String,
            required: true
        },
        class: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Class',
            required: true
        },
        pace: {
            type: String
        }
    }
);

export default mongoose.model("Test", TestSchema);