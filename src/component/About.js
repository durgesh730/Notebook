import React from 'react'
import BottomNav from './BottomNav';
import './BottomNav.css';

const About = () => {

  return (
    <>
           <div className='card-text aboutPara'>
            <span>
            This is a Project named "Notebook" of Full Stack Development 
             and the project is developed using HTML, CSS, Javacript, React.js, Node.js, 
             Espress.js, Mongodb. Using these, we have created a REST API and login page, signup page,
              Home Page. In this project User Can first Signup and Write Their Notes and After completed
               the Work successfully, user can logout and have option to Login with their email id and password and 
               the User can access their notes </span>
           </div>
          
          <div style={{ paddingTop:"6.5rem"}}>
           <BottomNav/></div>
    </>
  )
}

export default About
