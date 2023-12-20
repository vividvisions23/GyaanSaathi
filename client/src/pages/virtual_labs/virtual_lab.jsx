import { Link } from "react-router-dom";

function VirtualLab() {
  return (
    <>
        
        <Link to="/virtual_lab/pendulum"><h1>Physics Lab</h1></Link>
        <Link to="/virtual_lab/acid"><h1>Chemistry Lab</h1></Link>        
        <Link to="/virtual_lab/mitosis"><h1>Biology Lab</h1></Link>
    </>
    
  );
}

export default VirtualLab;


// App.jsx


