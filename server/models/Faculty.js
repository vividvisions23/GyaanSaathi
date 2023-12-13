import mongoose from "mongoose";

const FacultySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    enroll: {
      type: String,
      required: true
    },
    profilePicture: {
      type: String,
    },
    cloud_id: {
      type: String,
    },
    password: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    department: {
      type: String,
      required: true
    },
    designation: {
      type: String,
      required: true
    },
    facultyPhone: {
      type: String,
      required: true
    },
    facultyAddress: {
      type: String,
      required: true
    },
    dob: {
      type: String,
      required: true
    },
    joiningYear: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isStudent: {
      type: Boolean,
      default: false
    },
    isFaculty: {
      type: Boolean,
      default: true
    },
    subject: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course'
    },
    classCode: {
      type: String
    }
  },
  { timestamps: true }
);

export default mongoose.model("Faculty", FacultySchema);