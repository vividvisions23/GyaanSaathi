
// CSS
import "./style/dark.scss";
import "./style/base.scss"


// React Stuff
import { useContext } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"


// Context
import { AuthContext } from "./context/AuthContext";
import { DarkModeContext } from "./context/darkModeContext";


// Datatable Columns
import { studentColumns } from "./source/datatablesource/studentColumns";
import { facultyColumns } from "./source/datatablesource/facultyColumns";
import { taskColumns } from "./source/datatablesource/taskColumns";
import { updateColumns } from "./source/datatablesource/updateColumns";
import { queryColumns } from "./source/datatablesource/queryColumns";
import { courseColumns } from "./source/datatablesource/courseColumns";
import FacultyHome from "./pages/home/FacultyHome";
import StudentHome from "./pages/home/StudentHome";
// Form Inputs
import { studentInputs } from "./source/formsource/studentInputs"
import { taskInputs } from "./source/formsource/taskInputs"
import { facultyInputs } from "./source/formsource/facultyInputs"
import { updateInputs } from "./source/formsource/updateInputs"
import { eventInputs } from './source/formsource/eventInputs';
import { courseInputs } from "./source/formsource/courseInputs";

// Admin Pages
import NewStudent from "./pages/student/NewStudent";
import NewFaculty from "./pages/faculty/NewFaculty";
import NewTask from "./pages/task/NewTask";
import NewCourse from "./pages/course/NewCourse";
import NewUpdate from "./pages/update/NewUpdate"
import EditTask from './pages/task/EditTask';
import EditUpdate from './pages/update/EditUpdate';
import EditCourse from './pages/course/EditCourse';


// Main Pages
import NewEvent from './pages/event/NewEvent';
import Events from './pages/event/Events';
import EditEvent from './pages/event/EditEvent';
import Response from './pages/response/Response';
import NewTest from "./pages/test/NewTest";
import EditTest from "./pages/test/EditTest";

// Common Pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import SingleStudent from "./pages/singleStudent/SingleStudent"
import SingleFaculty from "./pages/singleFaculty/SingleFaculty"
import List from "./pages/list/List"
import Landing from "./pages/Landing/Landing";
import EditStudent from './pages/student/EditStudent';
import EditFaculty from './pages/faculty/EditFaculty';
import NewTimeTable from "./pages/timetable/NewTimeTable";
import Class from "./pages/class/Class";
import AddClass from "./pages/class/AddClass";
import ViewClass from "./pages/class/ViewClass";


function App() {
  
  const { darkMode } = useContext(DarkModeContext);  

  const { user } = useContext(AuthContext)

  // if user is not logged in then redirect to home page if user tries to 
  // access some page
  
  const RequireAuth = ({ children }) => {
    return user ? (children) : <Navigate to="/home" />
  }

  // if user is not admin redirects to login page
  const RequireAdmin = ({ children }) => {
    return user.isAdmin ? (children) : <Navigate to="/home" />
  }

  // if user is not student redirects to login page
  const RequireStudent = ({ children }) => {
    return user.isStudent ? (children) : <Navigate to="/home" />
  }

  // if user is not faculty redirects to login page
  const RequireFaculty = ({ children }) => {
    return user.isFaculty ? (children) : <Navigate to="/home" />
  }

  // if user is not admin then they cannot access faculty/login pages
  const RequireCommon = ({children}) => {
    return user.isAdmin ? <Navigate to="/home" /> : (children) 
  }

  // if user is not a creator (i.e.) cr and faculty both have access 
  const RequireCreator = ({children}) => {
    return user.isStudent && !user.isCr ? <Navigate to="/home" /> : (children) 
  }

  // if user is logged in and reaches on log in page then redirect to home page
  const LoggedIn = ({children}) => {
    if(user) {
      if(user.isAdmin)
        return <Navigate to="/admin" />
      else
        return <Navigate to="/" />
    } else
    return children
  }

  return (

    // darkmode context
    <div className={darkMode ? "app dark" : "app"}>

      <BrowserRouter>
       <Routes>

        {/* Landing page */}
        <Route path="/home" element={
          <LoggedIn>
            <Landing />
          </LoggedIn>
        } />



        {/****************************************************************************************************/}

        {/* Admin Routes */}



        {/* login page for admin */}
        <Route path="/adminLogin" element={
          <LoggedIn>
            <Login type="Admin" />
          </LoggedIn>
        } />

        {/* dashboard of admin */}

        <Route path="/admin" element={
            <RequireAuth>
                <RequireAdmin>
                <Home type="Admin" />
                </RequireAdmin>
            </RequireAuth>
        } />



        {/* routes for students */}

        {/* list of students */}
        <Route path="/admin/students" element={
          <RequireAuth>
            <RequireAdmin>
              <List column={studentColumns} name="Student" type="Admin" />
            </RequireAdmin>
          </RequireAuth>
        } />

        {/* single page for student */}
          <Route path="/admin/students/:studentId" element={
            <RequireAuth>
              <RequireAdmin>
                <SingleStudent type="Admin" />
              </RequireAdmin>
            </RequireAuth>
        } />


        {/* edit page for student */}
        <Route path="/admin/students/:studentId/edit" element={
          <RequireAuth>
            <RequireAdmin>
              <EditStudent title="Update Student" type="Admin" />
            </RequireAdmin>
          </RequireAuth>
        } />

        {/* create user student */}
        <Route path="/admin/students/new" element={
          <RequireAuth>
            <RequireAdmin>
              <NewStudent inputs={studentInputs} title="Add New Student" />
            </RequireAdmin>
          </RequireAuth>
        } />



        {/* routes for faculties */}

        {/* list of faculties */}
        <Route path="/admin/faculties" element={
          <RequireAuth>
            <RequireAdmin>
              <List column={facultyColumns} name="Faculty" type="Admin" />
            </RequireAdmin>
          </RequireAuth>
        } />

        {/* single page for faculty */}
          <Route path="/admin/faculties/:facultyId" element={
            <RequireAuth>
              <RequireAdmin>
                <SingleFaculty type="Admin" />
              </RequireAdmin>
            </RequireAuth>
        } />

        {/* edit page for faculty */}
        <Route path="/admin/faculties/:facultyId/edit" element={
          <RequireAuth>
            <RequireAdmin>
              <EditFaculty title="Update Faculty" type="Admin" />
            </RequireAdmin>
          </RequireAuth>
        } />

        {/* create faculty */}
        <Route path="/admin/faculties/new" element={
          <RequireAuth>
            <RequireAdmin>
              <NewFaculty inputs={facultyInputs} title="Add New Faculty" />
            </RequireAdmin>
          </RequireAuth>
        } />



        {/* routes for updates */}
        <Route path="/admin/updates" element={
            <RequireAuth>
              <RequireAdmin>
                <List column={updateColumns} name="Update" type="Admin" />
              </RequireAdmin>
            </RequireAuth>
        } />

        {/* edit update */}
        <Route path="/admin/updates/:updateId/edit" element={
            <RequireAuth>
              <RequireAdmin>
                <EditUpdate title="Edit Updates" type="Admin"/>
              </RequireAdmin>
            </RequireAuth>
        } />

        {/* create update page */}
        <Route
            path="/admin/updates/new" element={
                <RequireAuth>
                  <RequireAdmin>
                    <NewUpdate inputs={updateInputs} title="Add New Update" type="Admin"/>
                  </RequireAdmin>
                </RequireAuth>
            }
        />

        {/* routes for timetable */}

        {/*  create new timetable */}
        
        <Route 
          path="/admin/timetables/new" element={
            <RequireAdmin>
              <RequireAuth>
                <NewTimeTable title="Add New Time Table"/>
              </RequireAuth>
            </RequireAdmin>
          }
        />

        {/* edit timetables */}

        <Route 
          path="/admin/timetables/:timetableId/edit" element={
            <RequireAdmin>
              <RequireAuth>
                <EditCourse title="Edit Timetable" type="Admin"/>
              </RequireAuth>
            </RequireAdmin>
          }
        />

        {/* routes for courses */}

        {/* list of courses */}

        <Route 
          path="/admin/courses" element={
            <RequireAdmin>
              <RequireAuth>
                <List column={courseColumns} name="Course" type="Admin"/>
              </RequireAuth>
            </RequireAdmin>
          }
        />

        {/*  create new courses */}
        
        <Route 
          path="/admin/courses/new" element={
            <RequireAdmin>
              <RequireAuth>
                <NewCourse inputs={courseInputs} title="Add New Course"/>
              </RequireAuth>
            </RequireAdmin>
          }
        />

        {/* edit courses */}

        <Route 
          path="/admin/courses/:courseId/edit" element={
            <RequireAdmin>
              <RequireAuth>
                <EditCourse title="Edit Courses" type="Admin"/>
              </RequireAuth>
            </RequireAdmin>
          }
        />

        {/* routes for classes */}

        {/* list of classes */}

        <Route 
          path="/admin/classes" element={
            <RequireAdmin>
              <RequireAuth>
                <Class />
              </RequireAuth>
            </RequireAdmin>
          }
        />

        {/*  create new classes */}
        
        <Route 
          path="/admin/classes/new" element={
            <RequireAdmin>
              <RequireAuth>
                {/* <NewCourse inputs={classInputs} title="Add New Class"/> */}
              </RequireAuth>
            </RequireAdmin>
          }
        />

        {/* edit classes */}

        <Route 
          path="/admin/faculties/:facId/addCourse" element={
            <RequireAdmin>
              <RequireAuth>
                <AddClass />
              </RequireAuth>
            </RequireAdmin>
          }
        />

        {/* view class */}
        <Route 
          path="/admin/classes/:classId" element={
            <RequireAdmin>
              <RequireAuth>
                <ViewClass />
              </RequireAuth>
            </RequireAdmin>
          }
        />


        {/* routes for events */}

        {/* list of events */}
        {/* <Route path="/admin/events" element={
            <RequireAuth>
            </RequireAuth>
        } /> */}




        {/****************************************************************************************************/}

        {/* Main Routes */}

        {/* login page for main */}
        <Route path="/studentLogin" element={
          <LoggedIn>
            <Login type="Student"/>
          </LoggedIn>
        } />

        <Route path="/facultyLogin" element={
          <LoggedIn>
          <Login type="Faculty" />
          </LoggedIn>
        } />

        {/* dashboard of main */}
        <Route path="/" element={
            < RequireAuth >
              <RequireCommon>
                <Home type="Main" />
              </RequireCommon>
            </RequireAuth>
        } />

        {/* profile page for student */}
        <Route path="/students/:id" element={
            <RequireAuth>
              <RequireStudent>
                <SingleStudent type="Main" />
              </RequireStudent>
            </RequireAuth>
        } />

        {/* edit profile page for faculty*/}
        <Route path="/students/:id/edit" element={
            <RequireAuth>
              <RequireStudent>
                <EditStudent title="Edit Profile" type="Main" />
              </RequireStudent>
            </RequireAuth>
        } />

        {/* profile page for faculty */}
        <Route path="/faculties/:id" element={
            <RequireAuth>
              <RequireFaculty>
                <SingleFaculty type="Main" />
              </RequireFaculty>
            </RequireAuth>
        } />

        {/* edit profile page for faculty */}
        <Route path="/faculties/:id/edit" element={
            <RequireAuth>
              <RequireFaculty>
                <EditFaculty title="Edit Profile" type="Main" />
              </RequireFaculty>
            </RequireAuth>
        } />

        {/* tasks page student side */}
        <Route path="/tasks" element={
            <RequireAuth>
              <RequireStudent>
                < List column={taskColumns} type="Main" name="Task" />
              </RequireStudent>
            </RequireAuth>
        } />


        {/* routes for tasks faculty side */}

        {/* list of tasks */}
        <Route path="/tasks/cr" element={
            <RequireAuth>
              <RequireFaculty>
                <List column={taskColumns} name="Task" type="Creator" />
              </RequireFaculty>
            </RequireAuth>
        } />

        {/* edit page for tasks */}
        <Route path="/tasks/cr/:taskId/edit" element={
            <RequireAuth>
              <RequireFaculty>
                <EditTask title="Update Task" />
              </RequireFaculty>
            </RequireAuth>
        } />

        {/* create task page */}
        <Route path="/tasks/cr/new" element={
            <RequireAuth>
              <RequireFaculty>
                <NewTask inputs={taskInputs} title="Add New Task" />
              </RequireFaculty>
            </RequireAuth>
        } />

        {/* updates page student side
        <Route path="/updates" element={
            <RequireAuth>
              <RequireStudent>
                < List column={updateColumns} type="Main" name="Update" />
              </RequireStudent>
            </RequireAuth>
        } /> */}

        {/* updates page faculty side*/}
        <Route path="/updates/cr" element={
            <RequireAuth>
              <RequireCreator>
                < List column={updateColumns} type="Creator" name="Update" />
              </RequireCreator>
            </RequireAuth>
        } />

        {/* edit update */}
        <Route path="/updates/cr/:updateId/edit" element={
            <RequireAuth>
              <RequireCreator>
                <EditUpdate title="Edit Updates" type="Main" />
              </RequireCreator>
            </RequireAuth>
        } />

        {/* create update page */}
        <Route
            path="/updates/cr/new" element={
              <RequireAuth>
                <RequireCreator>
                  <NewUpdate inputs={updateInputs} title="Add New Update" type="Main" />
                </RequireCreator>
              </RequireAuth>
            }
        />

        {/* routes for tests faculty side */}

        {/* list of tests */}
        {/* <Route path="/tests/cr" element={
            <RequireAuth>
              <RequireFaculty>
                <List column={testColumns} name="Test" type="Creator" />
              </RequireFaculty>
            </RequireAuth>
        } /> */}

        {/* edit page for tests */}
        <Route path="/tests/:testId/edit" element={
            <RequireAuth>
              <RequireFaculty>
                <EditTest title="Update Test" />
              </RequireFaculty>
            </RequireAuth>
        } />

        {/* create test page */}
        <Route path="/tests/new" element={
            <RequireAuth>
              <RequireFaculty>
                <NewTest title="Add New Test" />
              </RequireFaculty>
            </RequireAuth>
        } />


        {/* events */}
        <Route path="/events" element={
            <RequireAuth>
                <Events />
            </RequireAuth>
        } />

        {/* create events page */}
        <Route path="/newEvent" element={
            <RequireAuth>
                <NewEvent inputs={eventInputs} title="Add New Event" />
            </RequireAuth>
        } />

        {/* edit events page */}
        <Route path="/events/:id" element={
            <RequireAuth>
                <EditEvent inputs={eventInputs} title="Edit Event" />
            </RequireAuth>
        } />

        {/* query page faculty side*/}
        <Route path="/queries" element = {
          <RequireAuth>
            <RequireFaculty>
              < List column={queryColumns} type="Faculty" name="Query" />
            </RequireFaculty>
          </RequireAuth>
        } />

        {/* response page student side*/}
        <Route path="/responses" element = {
          <RequireAuth>
            <RequireStudent>
              <Response />
            </RequireStudent>
          </RequireAuth>
        } />

        {/* Route for the FacultyHome component */}
        <Route path="/faculty" element={<FacultyHome type="faculty" />} />
        <Route path="/student" element={<StudentHome type="student" />} />

        </Routes>
        
      </BrowserRouter>

    </div>

  );
}

export default App;
