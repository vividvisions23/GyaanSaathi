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
          type: Date,
          // set: (dateString) => new Date(dateString), 
        },
        status: {
          type: Boolean,
          required: true,
        },
        sub_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Course',
        },
      },
    ],
    marks: [
      {
        sub_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Course'
        },
        value: {
          type: Number,
          default: 0
        }
      }
    ]
  },
  { timestamps: true }
);


export default mongoose.model("Student", StudentSchema);