import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    deadline: {
      type: String,
      required: true
    },
    sclass: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Class',
    },
    author: {
      type: String,
      required: true
    },
    pace: {
      type: String
    },
    category: {
      type: String
    }
  },
  { timestamps: true }
);

export default mongoose.model("Task", TaskSchema);
