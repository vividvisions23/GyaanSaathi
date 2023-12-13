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
            ref: 'Faculty'
        }
    }
);

export default mongoose.model("Test", TestSchema);