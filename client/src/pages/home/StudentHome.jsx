import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import StudentNavbar from '../../components/studentNavbar/StudentNavbar'; // Import the StudentNavbar
import StudentWidgets from '../../components/studentWidgets/StudentWidgets';
import Table from '../../components/table/Table';

const StudentHome = ({ type }) => {
  return (
    <div className="home">
      {type === 'student' ? <StudentNavbar /> : <Navbar />} {/* Conditionally render the Navbar */}
      <div className="studentHomeContainer">
        <div className="welcome">
          {/* Customized welcome content for student */}
        </div>
        <div className="widgets">
          <StudentWidgets />
        </div>
        <div className="mainContainer">
          {/* Customized content for student */}
          <div className="studentListContainer">
            <div className="listTitle">Your Tasks</div>
            <Table type={`tasks/${type}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
