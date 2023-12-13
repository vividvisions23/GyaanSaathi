import "./adminNavbar.scss";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

import { DarkModeContext } from "../../context/darkModeContext";

import { useContext, useState } from "react";
import { Link} from "react-router-dom"

import AdminSidebar from "../AdminSidebar/AdminSidebar"

const AdminNavbar = () => {

  // calling dispatch function that enables dark mode
  const { Dispatch } = useContext(DarkModeContext);

  // use state for opening and closing sidebar 
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="navbar">

      {/* Side bar only gets opened when openSidebar becomes true */}
      {openSidebar && <AdminSidebar setOpen={setOpenSidebar} />}

      <div className="wrapper">

        {/* Home and brand icon */}
        <Link to="/admin">
          {/* <p className=""><img src={process.env.PUBLIC_URL + "/Assets/brand.png"} height="60px" alt="" /></p> */}
          <p style={{"color" : "black"}}>Admin Dashboard</p>
        </Link>

        <div className="items">

          {/* Icon to toggle light and dark mode */}
          
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => Dispatch({ type: "TOGGLE" })}
            />
          </div>

          {/* Make openSidebar true and false based on how user clicks the icon */}

          <div className="item" onClick={() => setOpenSidebar(!openSidebar)}>
            <ListOutlinedIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;