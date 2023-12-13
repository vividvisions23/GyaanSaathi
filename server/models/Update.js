import mongoose from "mongoose";

const UpdateSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "New"
    }
}, { timestamps: true })

export default mongoose.model("Update", UpdateSchema);