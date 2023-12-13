import mongoose from "mongoose"; 

// need to make subjects

const TimetableSchema = new mongoose.Schema({
    department: {
        type: String,
        required: true
    },
    semester: {
        type: String, 
        required: true
    },
    Monday:[
        {
            start_time: String,
            end_time: String,
            subject: String,
            teacher: String,
            topic: String
        }
    ],
    Tuesday:[
        {
            start_time: String,
            end_time: String,
            subject: String,
            teacher: String,
            topic: String
        }
    ],
    Wednesday:[
        {
            start_time: String,
            end_time: String,
            subject: String,
            topic: String
        }
    ],
    Thursday:[
        {
            start_time: String,
            end_time: String,
            subject: String,
            topic: String
        }
    ],
    Friday:[
        {
            start_time: String,
            end_time: String,
            subject: String,
            topic: String
        }
    ]
})

export default mongoose.model("Timetable", TimetableSchema);
