import React from 'react'
import './adminWidgets.scss'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import SchoolIcon from '@mui/icons-material/School';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PeopleIcon from '@mui/icons-material/People';

const AdminWidgets = () => {
  return (
    <div className="AdminWidgets">
        <div className='widget' style={{"backgroundColor":"var(--light-blue)"}}>
            <div className="leftContainer">
                <SchoolIcon className='icon'/>
            </div>
            <div className="rightContainer">
                <h4>Students</h4>
                <h3>2000</h3>
            </div>
        </div>
        <div className='widget' style={{"backgroundColor":"var(--light-pink)"}}>
            <div className="leftContainer">
                <EmojiPeopleIcon className='icon'/>
            </div>
            <div className="rightContainer">
                <h4>Teachers</h4>
                <h3>250</h3>
            </div>
        </div>
        <div className='widget' style={{"backgroundColor":"var(--light-yellow)"}}>
            <div className="leftContainer" >
                <LibraryBooksIcon className='icon'/>
            </div>
            <div className="rightContainer">
                <h4>Subjects</h4>
                <h3>53</h3>
            </div>
        </div>
        <div className='widget' style={{"backgroundColor":"var(--light-green)"}}>
            <div className="leftContainer">
                <PeopleIcon className='icon'/>
            </div>
            <div className="rightContainer">
                <h4>Classes</h4>
                <h3>12</h3>
            </div>
        </div>
    </div>
  )
}

export default AdminWidgets