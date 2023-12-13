import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        subjectCode: {
            type: String,
            required: true
        },
        credits: {
            type: Number,
            required: true
        },
        department: {
            type: String
        }, 
        semester: {
            type: String
        },
        syllabusPicture: {
            type: String,
        },
        cloud_id: {
            type: String,
        },
        material: {
            type: [String]
        },
        teacher: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Faculty'
        },
        classCode: {
            type: String
        }
    }
);

export default mongoose.model("Course", CourseSchema);