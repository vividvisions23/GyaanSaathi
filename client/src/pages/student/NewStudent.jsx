import "../../style/form.scss";

// choice for gender, year, department

import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import axios from "axios"

import { departments, semesters} from "../../source/formsource/arrays";
import AdminNavbar from "../../components/adminNavbar/AdminNavbar";

const NewUser = ({ inputs, title }) => {
  
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const [year, setYear] = useState(0);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  const handleClick = async (e) => {
    e.preventDefault();
    
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

        axios.post("http://localhost:5500/api/students/registerStudent", newuser, {
          withCredentials: false
        })
        navigate(-1)

      } catch (error) {
        console.log(error)
      }
    
    } else {
      try {
        await axios.post("http://localhost:5500/api/students/registerStudent", info, {
          withCredentials: false
        })
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
        <AdminNavbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">

          <div className="right">

          <div className="left">
          <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
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

              <div className="formInput">
                <label>Gender</label>
                <select
                  id="gender"
                  onChange={handleChange}
                >
                  <option value={0}>-</option>
                  <option value={"Female"}>Female</option>
                  <option value={"Male"}>Male</option>
                </select>
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                  />
                </div>
              ))}

              <div className="formInput">
                <label>Semester</label>
                <select
                  id="semester"
                  onChange={handleChange}
                >
                  <option value={0}>-</option>
                  {
                    semesters.map((s) => (
                      <option value={s.id} key={s.id} onClick={() => setYear(s.year)}>{s.name}</option>
                    ))
                  }
                </select>
              </div>

              <div className="formInput">
                <label>Choose a Department</label>
                <select
                  id="department"
                  onChange={handleChange}
                >
                  <option value={"-"}> </option>
                  {
                    departments.map((d) => (
                      <option value={d.name} key={d.id}>{d.name}</option>
                    ))
                  }
                </select>
              </div>

              <div className="formInput">
                <label>Year: {year}</label>
              </div>

            </form>
            <div className="submitButton">
              <button onClick={handleClick} className="form-btn">Create Student</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
