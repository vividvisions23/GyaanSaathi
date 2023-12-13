import "./home.scss";

// calling all the components on the page
import Navbar from "../../components/navbar/Navbar";
import AdminNavbar from "../../components/adminNavbar/AdminNavbar"
import Widget from "../../components/Courses/Courses";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

// type specifies the admin side or user side 
const Home = ({ type }) => {

  return (
    <div className="home">
      <div className="AdminHomeContainer">
        {/* Navbar according to the type of user */}
        {(type === "Admin") ? (<AdminNavbar />) : (<Navbar />)}

        <div className="welcome">
          <img src="https://drive.google.com/uc?id=1ReJV_kcqYaIuxt6ot-LXFYHcuJXtwJxx" alt="" />
          <div className="text">
            <h1>Welcome to ERP Portal</h1>
            <p>Providing seamless navigation for your college life via our portal</p>
          </div>
        </div>

        <div className="buttons">
          
        </div>

        {/* widgets
        <div className="widgets">
          <Widget type="ml" />
          <Widget type="oops" />
          <Widget type="compilerdesign" />
          <Widget type="computernetwork" />
          <Widget type="operatingsystem" />
          <Widget type="systemdesign" />
        </div> */}

        {/* Latest Updates */}
        <div className="AdminListContainer">
          <div className="listTitle">Latest Notifications</div>
          <Table type="updates" />
        </div>
        

        {/* <iframe src="https://drive.google.com/file/d/1O0i1yYkclXOuZ6xY_SAXjp5PsL0KFvJj/preview"
          width="800"
          height="400"
        /> */}

        {/* total revenue and charts
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div> */}

      </div>
    </div>
  );
};

export default Home;
