import mongoose from "mongoose";

const TestSchema = new mongoose.Schema(
    {
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
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Faculty',
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