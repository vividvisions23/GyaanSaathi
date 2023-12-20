import React, { useEffect } from "react";
// import "./searchPage.css";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from "../../hooks/useFetch.js";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";

import Aos from 'aos'

function StuVideo() {
    const { user } = useContext(AuthContext)
    console.log(user.class);
    const url = `http://localhost:5500/api/video/student/${user.class}`; 
  const [querys, setquerys] = useState("");
  const { data, loading } = useFetch(url);
  console.log(data);

  const keys = ["subject"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(querys))
    );
  };

  useEffect(() => {
    Aos.init({duration: 1000});
  },[])

  return (
    <div className="searchContainer">
      <div className="search">
        <div className="searchBar">
          <h2>Search Videos by Subject Name</h2>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search by Subject"
              onChange={(e) => setquerys(e.target.value)}
            />
            {/* <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} /> */}
          </div>
        </div>
      </div>

      <div className="searchedPosts">
        {loading ? (
          <>
            <div className="p" style={{color: "white", "fontFamily": "'Kaushan Script', cursive"}}>Loading...</div>
          </>
        ) : (
          <>
            {search(data).map((item, i) => (
              <div className="card" key={item._id} data-aos="fade-up">
                <div class="content">
                <Link to={`/${item._id}`}>
                    <button>Read More</button>
                  </Link>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default StuVideo;