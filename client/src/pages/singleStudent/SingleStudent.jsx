import "./single.scss";

import { useLocation, useNavigate } from "react-router-dom";

import Navbar from "../../components/navbar/Navbar";
import AdminNavbar from "../../components/adminNavbar/AdminNavbar";
import EditIcon from '@mui/icons-material/Edit';

import useFetch from "../../hooks/useFetch";

const Single = ({ type }) => {
  
  // get id of the user using location
  // auth context can also be used 

  const location = useLocation();
  
  let id
  if (type === "Main")
    id = location.pathname.split("/")[2];
  else
    id = location.pathname.split("/")[3];
  const { data } = useFetch(`/students/${id}`)
  
  // used to navigate to a certain link
  const navigate = useNavigate();

  return (
    <div className="single">

      <div className="singleContainer">
        {(type === "Admin") ? (<AdminNavbar />) : (<Navbar />)}
        
        <div className="top">
          <div className="left">
        
            <h1 className="title">Information</h1>
            <div className="item">
              
              {/* Image if exists */}
              <img
                src={data.profilePicture || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
                alt=""
                className="itemImg"
              />

              {/* All the details */}
              <div className="details">

                {/* Name */}
                <h1 className="itemTitle">{data.name}</h1>
                
                {/* ID */}
                <div className="detailItem">
                  <span className="itemKey">Enrollment Number:</span>
                  <span className="itemValue">{data.enroll}</span>
                </div>
                
                {/* Username */}
                <div className="detailItem">
                  <span className="itemKey">Username:</span>
                  <span className="itemValue">{data.username}</span>
                </div>
                
                {/* Email */}
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data.email}</span>
                </div>
                
                {/* Phone Number */}
                <div className="detailItem">
                  <span className="itemKey">Phone Number:</span>
                  <span className="itemValue">{data.studentPhone}</span>
                </div>

                {/* Address */}
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">{data.studentAddress}</span>
                </div>
                
                {/* Department */}
                <div className="detailItem">
                  <span className="itemKey">Department:</span>
                  <span className="itemValue">{data.department}</span>
                </div>

                {/* Year */}
                <div className="detailItem">
                  <span className="itemKey">Year:</span>
                  <span className="itemValue">{data.year}</span>
                </div>

                {/* Gender */}
                <div className="detailItem">
                  <span className="itemKey">Gender:</span>
                  <span className="itemValue">{data.gender}</span>
                </div>

                {/* Section */}
                <div className="detailItem">
                  <span className="itemKey">Section:</span>
                  <span className="itemValue">{data.section}</span>
                </div>

                {/* Date of Birth */}
                <div className="detailItem">
                  <span className="itemKey">Date of Birth:</span>
                  <span className="itemValue">{data.dob}</span>
                </div>
              </div>
            </div>

            {/* Takes to Edit Page */}
            <EditIcon style={{ height: "20px", paddingRight: "10px", cursor: "pointer" }} onClick={() => navigate("edit")} />
            
          </div>

          <div className="right">
            <h1 className="title">Semester Registration</h1>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
