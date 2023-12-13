import "../../style/form.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { departments, semesters } from "../../source/formsource/arrays";
import AdminNavbar from "../../components/adminNavbar/AdminNavbar";

const NewCourse = ({ inputs, title }) => {

  const [info, setInfo] = useState({});
  
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  const handleClick = async (e) => {
    const button = document.getElementsByClassName("form-btn")
    button.disabled = "true"
    e.preventDefault();
    try {
      const newcourse = {
        ...info,
      }

      await axios.post("http://localhost:5500/api/courses", newcourse, {
        withCredentials: false
      });
      navigate(-1)
    } catch (err) {
      console.log(err)
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
            <form>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}

            <div className="formInput">
                <label>Choose Department</label>
                <select id="department" onChange={handleChange}>
                    <option value={"-"}> </option>
                    {
                        departments.map((d) => (
                        <option value={d.name} key={d.id}>{d.name}</option>
                        ))
                    }
                </select>
            </div>

            <div className="formInput">
                <label>Semester</label>
                <select
                  id="semester"
                  onChange={handleChange}
                >
                  <option value={0}>-</option>
                  {
                    semesters.map((s) => (
                      <option value={s.id} key={s.id}>{s.name}</option>
                    ))
                  }
                </select>
            </div>     

            </form>
            <div className="submitButton">
              <button onClick={handleClick} className="form-btn">Create Course</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCourse;
