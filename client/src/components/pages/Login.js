import React, { Component } from 'react';
import axios from "axios"; 
import { Redirect, Link } from 'react-router-dom';






class Login extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      emailId:'',
      employeeName: '',
      employeeId:'',
      password:''
        
    };



}


handleSubmit = event => {
    event.preventDefault();
    const userLoginData = {    
      employeeName: this.state.employeeName,
      emailId: this.state.emailId,
      password: this.state.password

    }

  
    axios.post('http://localhost:5000/api/login', { userLoginData })
      .then(res=>{
        console.log(res.data);
        localStorage.setItem('employeeId', res.data.employeeId);
        localStorage.setItem('emailId', res.data.emailId);
        localStorage.setItem('employeeName', this.state.employeeName);

       

        })
  }

  handleChange (event) {
    this.setState( { [event.target.name]: event.target.value });

  }

   
render() {
    return (
      
<form onSubmit={this.handleSubmit} >
<fieldset>
<legend> <h3>Login:</h3></legend>
        Username :<input
          name="employeeName"
          type="text"
          onChange={event => this.handleChange(event)} 
          //data-parse="uppercase"
        />


        Password:<input
          name="password"
          type="text"
          onChange={event => this.handleChange(event)} 
          //data-parse="uppercase"
        />




{/* <button type="button" class="btn btn-success">Login</button> */}
<button>Login</button>

</fieldset>
      </form>


      
      
   

   );
  
}
}
export default Login;