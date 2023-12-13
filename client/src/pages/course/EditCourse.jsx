import "../../style/form.scss";

import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import axios from "axios";
import useFetch from "../../hooks/useFetch";
import { departments, semesters } from "../../source/formsource/arrays";
import Navbar from "../../components/navbar/Navbar";

const EditCourse = ({ title }) => {
  
  // get location and extract id out of it
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const [info, setInfo] = useState({});

  // fetch data using id
  const { data } = useFetch(`/courses/${id}`)

  const navigate = useNavigate();

  // data needs to be present in forms for it to change hence feed data into the array
  useEffect(() => {
    setInfo(data)
  }, [data])

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  // update the data in the data base using put method
  const handleClick = async (e) => {
    e.preventDefault();
    try {

      await axios.put(`http://localhost:5500/api/courses/${id}`, info, {
        withCredentials: false
      });

      // go back to previous page
      navigate(-1)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div className="new">

      <div className="newContainer">
        <Navbar />

        {/* Title of form */}
        <div className="top">
          <h1>{title}</h1>
        </div>

        {/* Form */}
        <div className="bottom">
          <div className="right">
            
            <form>
              <div className="formInput" >
                <label>Course Name</label>
                <input
                  id="name"
                  onChange={handleChange}
                  type="text"
                  placeholder="Add name of the course"
                  value={info.name}
                />
              </div>

              <div className="formInput">
                <label>Subject Code</label>
                <input
                  id="subjectCode"
                  onChange={handleChange}
                  type="text"
                  value={info.subjectCode}
                  placeholder="Add unique code of subject"
                />
              </div>

              <div className="formInput" >
                <label>Credits</label>
                <input
                  id="credits"
                  onChange={handleChange}
                  type="number"
                  value={info.credits}
                  placeholder="Add number of credits for this course"
                />
              </div>

              <div className="formInput">
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
              </div>

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
                      <option value={s.id} key={s.id}>{s.name}</option>
                    ))
                  }
                </select>
              </div>
            </form>

            {/* Submit Button */}
            <div className="submitButton">
              <button onClick={handleClick} id="submit" className="form-btn">Edit Course</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCourse;
