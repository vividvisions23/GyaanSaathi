// FacultyButton.jsx
import React from 'react';
import GroupAddIcon from '@mui/icons-material/GroupAdd'; // Replace with faculty-specific icon
import BookIcon from '@mui/icons-material/Book';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import { Link } from 'react-router-dom';

import "./facultyButton.scss" // Update the SCSS file name

const FacultyButton = () => {
  return (
    <div className='facultyButton'>
      <h2>Create</h2>
      <div className="flexContainer">
        <Link to="/faculty/students/new" style={{ textDecoration: "none", color: "black" }}>
          <div className="createButton">
            <GroupAddIcon className='icon' style={{ color: "var(--orange)" }} />
            <p>Attendance</p>
          </div>
        </Link>
        <Link to="/admin/faculties/new" style={{ textDecoration: "none", color: "black"  }}>
          <div className="createButton">
            <GroupAddIcon className='icon' style={{color:"var(--orange)"}}/>
            <p>Marks</p>
          </div>
        </Link>
        <Link to="/admin/courses/new" style={{ textDecoration: "none", color: "black"  }}>
          <div className="createButton">
            <BookIcon className='icon' style={{color:"var(--red)"}}/>
            <p>Task</p>
          </div>
        </Link>
        <Link to="/admin/timetables/new" style={{ textDecoration: "none", color: "black" }}>
          <div className="createButton">
            <CalendarMonthIcon className='icon' style={{color:"var(--green)"}}/>
            <p>Test</p>
          </div>
        </Link>
        <Link to="/admin/updates/new" style={{ textDecoration: "none", color: "black"  }}>
          <div className="createButton">
            <NotificationAddIcon className='icon' style={{color:"var(--pink)"}}/>
            <p>Material</p>
          </div>
        </Link>
        <Link to="/admin/updates/new" style={{ textDecoration: "none", color: "black"  }}>
          <div className="createButton">
            <NotificationAddIcon className='icon' style={{color:"var(--pink)"}}/>
            <p>Videos</p>
          </div>
        </Link>
        <Link to="/admin/updates/new" style={{ textDecoration: "none", color: "black"  }}>
          <div className="createButton">
            <NotificationAddIcon className='icon' style={{color:"var(--pink)"}}/>
            <p>Announcement</p>
          </div>
        </Link>
        {/* Other Link components for faculty */}
      </div>
    </div>
  )
}

export default FacultyButton;
