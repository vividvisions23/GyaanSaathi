import mongoose from "mongoose";

const ClusterSchema = new mongoose.Schema (
    {
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student'
        },
        category: {
            type: Number
        }
    },
    { timestamps: true }
);

export default mongoose.model("Cluster", ClusterSchema);
