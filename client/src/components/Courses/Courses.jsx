import "./Courses.scss";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const Widget = ({ type }) => {
  // let data;


  // switch (type) {
  //   case "ml":
  //     data = {
  //       title: "MACHINE LEARNING",
  //       code: 312,
  //       credit: 4,
  //       teacher: "Course Incharge: Ms. abc",
  //       link: "Related Material and Syllabus",
  //       icon: (
  //         <ComputerIcon
  //           className="icon"
  //           style={{
  //             color: "crimson",
  //             backgroundColor: "rgba(255, 0, 0, 0.2)",
  //           }}
  //         />
  //       ),
  //     };
  //     break;
  //   case "oops":
  //     data = {
  //       title: "OOPS",
  //       code: 314,
  //       credit: 4,
  //       teacher: "Course Incharge: Ms. abc",
  //       link: "Related Material and Syllabus",
  //       icon: (
  //         <SourceIcon
  //           className="icon"
  //           style={{
  //             backgroundColor: "rgba(218, 165, 32, 0.2)",
  //             color: "goldenrod",
  //           }}
  //         />
  //       ),
  //     };
  //     break;
  //   case "compilerdesign":
  //     data = {
  //       title: "COMPILER DESIGN",
  //       code: 316,
  //       credit: 4,
  //       teacher: "Course Incharge: Ms. abc",
  //       link: "Related Material and Syllabus",
  //       icon: (
  //         <DevicesRoundedIcon
  //           className="icon"
  //           style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
  //         />
  //       ),
  //     };
  //     break;
  //   case "operatingsystem":
  //     data = {
  //       title: "OPERATING SYSTEM",
  //       code: 412,
  //       credit: 4,
  //       teacher: "Course Incharge: Ms. abc",
  //       link: "Related Material and Syllabus",
  //       icon: (
  //         <DeviceHubIcon
  //           className="icon"
  //           style={{
  //             backgroundColor: "rgba(128, 0, 128, 0.2)",
  //             color: "purple",
  //           }}
  //         />
  //       ),
  //     };
  //     break;
  //     case "systemdesign":
  //     data = {
  //       title: "SYSTEM DESIGN",
  //       code: 414,
  //       credit: 4,
  //       teacher: "Course Incharge: Ms. abc",
  //       link: "Related Material and Syllabus",
  //       icon: (
  //         <StorageIcon
  //           className="icon"
  //           style={{
  //             backgroundColor: "rgba(220, 53, 53, 0.2)",
  //             color: "rgb(220, 53, 53)",
  //           }}
  //         />
  //       ),
  //     };
  //     break;
  //     case "computernetwork":
  //     data = {
  //       title: "COMPUTER NETWORKS",
  //       code: 416,
  //       credit: 4,
  //       teacher: "Course Incharge: Ms. abc",
  //       link: "Related Material and Syllabus",
  //       icon: (
  //         <LanIcon
  //           className="icon"
  //           style={{
  //             backgroundColor: "rgba(200, 92, 142, 0.2)",
  //             color: "rgb(200, 92, 142)",
  //           }}
  //         />
  //       ),
  //     };
  //     break;
  //   default:
  //     break;
  // }

  return (
    <div className="widget">
      <div className="left">
        <span className="title" style={{"fontSize": "1.4rem"}}>Course</span>
        <span className="teacher">Subject Code</span>
        <span className="code">Teacher</span>
      </div>
    </div>
  );
};

export default Widget;
