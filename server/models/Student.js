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
    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Class'
    },
    studentPhone: {
      type: String,
      required: true
    },
    studentAddress: {
      type: String,
      required: true
    },
    group: {
      type: String,
    },
    pace: {
      type: String
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
    attendance: [
      {
        atten_date: {
          type: String,
          required: true,
          // get: (date) => date.toISOString().split('T')[0], // Get the date as a string in "YYYY-MM-DD" format
          // set: (dateString) => new Date(dateString), 
        },
        status: {
          type: Boolean,
          required: true,
        },
        sub_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'subject',
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);


export default mongoose.model("Student", StudentSchema);