import "./modal.css"

import CancelIcon from '@mui/icons-material/Cancel';
import useFetch from "../../hooks/useFetch"
import { useState } from "react";
import axios from "axios";



// setOpen prop, id is the id of the data we need to display and type will tell whether it's task or update

const Modal = ({ setOpen, id, type }) => {

    // fetch the required data
    const { data } = useFetch(`/${type}/${id}`);

    const [info, setInfo] = useState({});

    // set the usestate to the data user passed 
    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }

    // post the usestate to database
    const handleClick = async (e) => {
        e.preventDefault();
        
        try {
            await axios.put(`http://localhost:5500/api/queries/${id}`, info, {
                withCredentials: false
            })
            setOpen(false)
        }
        catch (err) {
            console.log(err)
        }
    }


    return (
        <div className="modal">
            <div className="mContainer">

                {/* setOpen set to false so that pop up closes */}
                <CancelIcon
                    className="mClose"
                    onClick={() => setOpen(false)}
                />
                
                {/* if type is updates */}
                {
                    type === "updates" &&
                    <div className="mUpdates">
                        <div className="mTitle">{data.title}</div>
                        <div className="mDesc">{data.desc}</div>
                        {/* <button className="mButton">
                            Mark
                        </button> */}
                    </div>
                }

                {/* If type is tasks */}
                {
                    type === "tasks" &&
                    <div className="mTasks">
                        <div className="mTitle">{data.title}</div>
                        <div className="mDesc">{data.desc}</div>
                        <p><span>Deadline</span> : {data.deadline}</p>
                        <p><span>Assigned To</span> : {data.assignedTo}</p>
                        {/* <button className="mButton">
                            Mark
                        </button> */}
                    </div>
                }

                {/* If type is query */}
                {
                    type === "queries" &&
                    <div className="mTasks">
                        <div className="mTitle">{data.title}</div>
                        <div className="mDesc">{data.description}</div>
                        <textarea
                            name="response"
                            id="response"
                            cols="30"
                            rows="10"
                            value={data.response}
                            onChange={handleChange}
                            placeholder='Respond to the query'>
                        </textarea>
                        <button className="mButton" onClick={handleClick}>
                            Done
                        </button>
                    </div>
                }

                {/* If type is tasks */}
                {
                    type === "courses" &&
                    <div className="mTasks">
                        <div className="mTitle">{data.name}</div>
                        <div className="mDesc">{data.subjectCode}</div>
                        <p>{data.credits} Credits</p>
                        <p><span>Department</span> : {data.department}</p>
                        <p><span>Semester</span> : {data.semester}</p>
                        {/* <button className="mButton">
                            Mark
                        </button> */}
                    </div>
                }
            </div>
        </div>
    )
}

export default Modal