import "./Landing.css"
import { Link } from 'react-router-dom'

const Landing = () => {

  return (
    
    <div className="landing-container">
      <h1>Classroom Portal</h1>
      <img src="https://drive.google.com/uc?id=1iJm3OOABf3ZaIs59VlHCGAiaBFWEuclR" alt="" />
      <div className="button-container">
        
        <div className="notAdmin">
        <Link to="/studentLogin">
          <button>Login as Student</button>
        </Link>
        
        <Link to="/facultyLogin">
          <button>Login as Faculty</button>
        </Link>
        </div>
        <div className="isAdmin">
          <Link to="/adminLogin">
            <button>Login as Admin</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Landing