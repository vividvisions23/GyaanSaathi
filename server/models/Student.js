import mongoose from "mongoose"; 

// need to make subjects

const StudentSchema = new mongoose.Schema(
  {
    name: {
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
    year: {
      type: String,
      required: true
    },
    semester: {
      type: String,
      required: true
    },
    department: {
      type: String,
      required: true
    },
    studentPhone: {
      type: String,
      required: true
    },
    studentAddress: {
      type: String,
      required: true
    },
    dob: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isStudent: {
      type: Boolean,
      default: true
    },
    isFaculty: {
      type: Boolean,
      default: false
    },
    isCR: {
      type: Boolean,
      default: false
    },
    classCode: {
      type: String
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
      }
    ]
  },
  { timestamps: true }
);



export default mongoose.model("Student", StudentSchema);