// AdminDashboard.js
import React from 'react';
import AdminNavbar from "../adminNavbar/AdminNavbar";
import AdminWidgets from "../adminWidgets/AdminWidgets";
import AdminButton from "../adminButtons/AdminButton";
import Table from "../table/Table";

const AdminDashboard = () => {
  return (
    <div className="AdminHomeContainer">
      <AdminNavbar />
      {/* Other Admin-specific components */}
      {/* ... */}
      <AdminWidgets />
      <div className="mainContainer">
        {/* Latest Updates */}
        <div className="AdminListContainer">
          <div className="listTitle">Latest Notifications</div>
          <Table type="updates" />
        </div>
        {/* Shortcut Buttons */}
        <div className="AdminButtons">
          <AdminButton />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
