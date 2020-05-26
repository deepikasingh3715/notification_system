// import React from 'react';
// import ItemList from './ItemList';

// const CreateNotification = () => (
//     <div>
//         <h1>Create Notification</h1>
//         <ItemList />
//     </div>
// )

// export default CreateNotification;










// import React, { Component }from 'react';
// import axios from 'axios';

// const inputParsers = {
//   date(input) {
//     const [month, day, year] = input.split('/');
//     return `${year}-${month}-${day}`;
//   },
//   uppercase(input) {
//     return input.toUpperCase();
//   },
//   number(input) {
//     return parseFloat(input);
//   },
// };

// class CreateNotification extends React.Component {
//   constructor() {
//     super();
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }


//   // componentDidMount() {
//   //  this.handleSubmit(event); 
//   // }




//   handleSubmit(event) {
//     event.preventDefault();
//     const form = event.target;
//     const data = new FormData(form);

//     for (let name of data.keys()) {
//       const input = form.elements[name];
//       const parserName = input.dataset.parse;

//       // if (parserName) {
//       //   const parser = inputParsers[parserName];
//       //   const parsedValue = parser(data.get(name));
//       //   data.set(name, parsedValue);
//       // }
//     }
    
//     //http://localhost:5000/api/df_text_query  
//      let res =  axios.post('http://localhost:5000/api/createnotification',  {text: data});


// //     fetch('https:/localhost:5000/api/createnotification',{
// //    // fetch('/api/form-submit-url', {
// //       method: 'POST',
// //       body: data,
// //     });
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//          Notification Id:<input
//           name="notificationId"
//           type="text"
//           //data-parse="uppercase"
//         />


//         Employee Id:<input
//           name="employeeId"
//           type="text"
//           //data-parse="uppercase"
//         />

//          Notification Type:
//         <input name="notificationType"
//          type="text" 
//          //data-parse="uppercase"
//          />

//          Description:
//         <input name="description"
//          type="text" 
//          //data-parse="uppercase"
//          />

        
         
//         ModeOfCommunication:<input
//           name="modeOfCommunication"
//           type="text"
//          // data-parse="text"
//           />


//           Notifiers:<input
//           name="notifiers"
//           type="text"
//          // data-parse="text"
//           />

//          isPublished:<input
//           name="isPublished"
//           type="text"
//          // data-parse="text"
//           />

//         <button> Create </button>
//       </form>
//     );
//   }
// }

// export default CreateNotification;




















import React, { Component } from 'react';
//import styled from "@emotion/styled";
import axios from "axios"; 
//import Header from "../../components/Header";
//const Container = styled.div`
  //margin-top: 150px;
//`;




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
      isPublished:'NO',
        
    };



}


  // state = {
  //   notificationId: '',
  //   employeeId:'',
  //   notificationType:'',
  //   description:'',
  //   modeOfCommunication:'',
  //   notifiers:'',
  //   isPublished:'',

  // };

/* This is where the magic happens 
*/
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

    //'http://localhost:5000/api/createnotification
    axios.post('http://localhost:5000/api/createnotification', { createnotification })
      .then(res=>{
        console.log(res);
        console.log(res.data);
       // window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
      })
  }
//handleChange = event =>{
  handleChange (event) {
    this.setState( { [event.target.name]: event.target.value })
  }

    // this.setState({ notificationId: event.target.value});
    // this.setState({employeeId: event.target.value});
    //   this.setState({notificationType: event.target.value});
    //   this.setState({ description: event.target.value});
    //       this.setState({modeOfCommunication: event.target.value});
    //         this.setState({ notifiers: event.target.value});
    //           this.setState({isPublished: event.target.value});
        
    
   // }

  //}
render() {
    return (
    //  // <Container>
        // <Header/>
        // <form onSubmit = { this.handleSubmit }>
        //   <label> Person Name:
        //     <input type = "text" name = "name" onChange= {this.handleChange}/>
        //   </label>

        //   <button type = "submit"> Add </button>
        // </form>



<form onSubmit={this.handleSubmit} >
        Notification Id:<input
          name="notificationId"
          type="text"
          //onChange= {this.handleChange}
          onChange={event => this.handleChange(event)} 
          //data-parse="uppercase"
        />


        Employee Id:<input
          name="employeeId"
          type="text"
          //onChange= {this.handleChange}
          onChange={event => this.handleChange(event)} 
          //data-parse="uppercase"
        />

         Notification Type:
        <input name="notificationType"
         type="text" 
         //onChange= {this.handleChange}
         onChange={event => this.handleChange(event)} 
         //data-parse="uppercase"
         />

         Description:
        <input name="description"
         type="text" 
         onChange={event => this.handleChange(event)} 
        // onChange= {this.handleChange}
         //data-parse="uppercase"
         />

        
         
        ModeOfCommunication:<input
          name="modeOfCommunication"
          type="text"
         // onChange= {this.handleChange}
         onChange={event => this.handleChange(event)} 
         // data-parse="text"
          />


          Notifiers:<input
          name="notifiers"
          type="text"
          onChange={event => this.handleChange(event)} 
         // onChange= {this.handleChange}
         // data-parse="text"
          />

         isPublished:<input
          name="isPublished"
          type="text"
          onChange={event => this.handleChange(event)} 
          //onChange= {this.handleChange}
         // data-parse="text"
          />

        <button> Create </button>
      </form>


    // </Container>
    );
  }
}
export default CreateNotification;