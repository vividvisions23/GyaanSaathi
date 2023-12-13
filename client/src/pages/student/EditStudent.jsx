import "../../style/form.scss";

import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import axios from "axios"

import { departments, semesters} from "../../source/formsource/arrays";
import Navbar from "../../components/navbar/Navbar";
import AdminNavbar from "../../components/adminNavbar/AdminNavbar";

const EditUser = ({ title, type }) => {

  const location = useLocation();
  let id;
  if (type === "Admin")
    id = location.pathname.split("/")[3];
  else
    id = location.pathname.split("/")[2];

  const { data } = useFetch(`/students/${id}`)
  const [info, setInfo] = useState({});
  const [file, setFile] = useState("");
  const [year, setYear] = useState(0);
  const [sending, setSending] = useState(false)

  useEffect(() => {
    setInfo(data)
  }, [data])


  const navigate = useNavigate();
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  const handleClick = async (e) => {
    e.preventDefault();
    setSending(true)
    if (file) {

      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "upload");

      try {
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dnzkakna0/image/upload",
          data, {
          withCredentials: false
        }
        )
        const { url } = uploadRes.data;
        const { public_id } = uploadRes.data;
        const newuser = {
          ...info, profilePicture: url, cloud_id: public_id, year: year
        }

        axios.put(`http://localhost:5500/api/students/${id}`, newuser, {
          withCredentials: false
        })
        navigate(-1)

      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        await axios.put(`http://localhost:5500/api/students/${id}`, info, { withCredentials: false })
        navigate(-1)
      }
      catch (err) {
        console.log(err)
      }
    }
  }


  return (
    <div className="new">
      <div className="newContainer">
        {(type === "Admin") ? (<AdminNavbar />) : (<Navbar />)}
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
          <div className="left">
            <img
              src={
                (file)
                  ? URL.createObjectURL(file)
                  : (info.profilePicture) ? info.profilePicture : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />

            <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
          </div>

            <form>

              {type === "Admin" && <div className="formInput">
                <label>Username</label>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter username"
                  id="username"
                  value={info.username}
                />
              </div>}

              {type === "Admin" && <div className="formInput">
                <label>Enrollment Number</label>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter enrollment number"
                  id="enroll"
                  value={info.enroll}
                />
              </div>}

              <div className="formInput">
                <label>Gender</label>
                <select
                  id="gender"
                  onChange={handleChange}
                  value={info.gender}
                >
                  <option value={0}>-</option>
                  <option value={"Female"}>Female</option>
                  <option value={"Male"}>Male</option>
                </select>
              </div>

              <div className="formInput">
                <label>Name</label>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter name"
                  id="name"
                  value={info.name}
                />
              </div>

              <div className="formInput">
                <label>Email</label>
                <input
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter email"
                  id="email"
                  value={info.email}
                />
              </div>

              <div className="formInput">
                <label>Phone Number</label>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter student's phone number"
                  id="studentPhone"
                  value={info.studentPhone}
                />
              </div>

              <div className="formInput">
                <label>Address</label>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter student's address"
                  id="studentAddress"
                  value={info.studentAddress}
                />
              </div>

              <div className="formInput">
                <label>Date of Birth</label>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter student's date of birth"
                  id="dob"
                  value={info.dob}
                />
              </div>

              {type==="Admin" && <div className="formInput">
                <label>Department</label>
                <select
                  id="department"
                  onChange={handleChange}
                  value={info.department}
                >
                  <option value={"-"}> </option>
                  {
                    departments.map((d) => (
                      <option value={d.name} key={d.id}>{d.name}</option>
                    ))
                  }
                </select>
              </div>}

              {type === "Admin" && <div className="formInput">
                <label>Section</label>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter student's section"
                  id="section"
                  value={info.section}
                />
              </div>}

              <div className="formInput">
                <label>Semester</label>
                <select
                  id="semester"
                  onChange={handleChange}
                  value={info.semester}
                >
                  <option value={0}>-</option>
                  {
                    semesters.map((s) => (
                      <option value={s.id} key={s.id} onClick={() => setYear(s.year)}>{s.name}</option>
                    ))
                  }
                </select>
              </div>


            </form>

            <div className="submitButton">
              <button className="form-btn" disabled={sending} id="submit" onClick={handleClick}>Edit Student</button>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
