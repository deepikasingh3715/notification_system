import React from 'react';

const About = () =>{
  return (
      <div>
      <h1>About Me</h1> 

      <h6>{ localStorage.getItem('employeeName') }</h6> 
      <h6>{ localStorage.getItem('employeeId') }</h6>
      <h6>{ localStorage.getItem('emailId') }</h6>

      </div>

  )


}

export default About;