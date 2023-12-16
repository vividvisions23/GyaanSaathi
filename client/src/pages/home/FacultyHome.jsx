import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import FacultyNavbar from '../../components/facultyNavbar/FacultyNavbar'; // Import the FacultyNavbar
import FacultyWidgets from '../../components/facultyWidgets/FacultyWidgets';
import Table from '../../components/table/Table';

const FacultyHome = ({ type }) => {
  return (
    <div className="home">
      {type === 'faculty' ? <FacultyNavbar /> : <Navbar />} {/* Conditionally render the Navbar */}
      <div className="facultyHomeContainer">
        <div className="welcome">
          {/* Customized welcome content for faculty */}
        </div>
        <div className="widgets">
          <FacultyWidgets />
        </div>
        <div className="mainContainer">
          {/* Customized content for faculty */}
          <div className="facultyListContainer">
            <div className="listTitle">Your Tasks</div>
            <Table type={`tasks/${type}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyHome;
