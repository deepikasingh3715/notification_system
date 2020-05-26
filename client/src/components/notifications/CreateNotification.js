import React, { Component } from 'react';
import axios from "axios"; 






class CreateNotification extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      
      notificationId: '',
      employeeId:'',
      notificationType:'',
      description:'',
      modeOfCommunication:'',
      notifiers:'',
      isPublished:'yes',
        
    };



}


handleSubmit = event => {
    event.preventDefault();
    const createnotification = {    
      notificationId: this.state.notificationId,
      employeeId: this.state.employeeId,
      notificationType: this.state.notificationType,
      description: this.state.description,
      modeOfCommunication: this.state.modeOfCommunication,
      notifiers: this.state.notifiers,
      isPublished: this.state.isPublished,

    }

  
    axios.post('http://localhost:5000/api/createnotification', { createnotification })
      .then(res=>{
        console.log(res);
        console.log(res.data);
       //window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
      })
  }

  handleChange (event) {
    this.setState( { [event.target.name]: event.target.value })
  }

   
render() {
    return (
    


    
< form  onSubmit={this.handleSubmit} >
<fieldset>
  <legend><h3>  Notify Users : </h3></legend>
 
        {/* Notification Id:<input
          name="notificationId"
          type="text"
          onChange={event => this.handleChange(event)} 
          //data-parse="uppercase"
        /> */}


        Employee Id:<input
          name="employeeId"
          type="text"
          placeholder={localStorage.getItem('employeeId')}
          onChange={event => this.handleChange(event)} 
          
        />

         Notification Type:
        <input name="notificationType"
         type="text" 
         onChange={event => this.handleChange(event)} 
         />

         Description:
        <textarea name="description"
         rows="7" cols="50"
         type="text" 
         onChange={event => this.handleChange(event)} 
           />



         ModeOfCommunication:<input
          name="modeOfCommunication"
          type="text"
         onChange={event => this.handleChange(event)} 
        ></input>



          Notifiers:<input
          name="notifiers"
          type="text"
          onChange={event => this.handleChange(event)} 
         
          />

         {/* isPublished:<input
          name="isPublished"
          type="text"
          onChange={event => this.handleChange(event)} 
         // data-parse="text"
          /> */}

        
        <button>Create</button>


        </fieldset>
      </form>
    );
  }
}
export default CreateNotification;