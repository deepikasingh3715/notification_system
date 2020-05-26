import React from 'react';
import axios from 'axios';



class GetNotificationTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  

    componentDidMount() {
      
        let employeeName = localStorage.getItem('employeeName');
        let emailId = localStorage.getItem('emailId');

    let userData = {};
    userData.employeeName=employeeName;
      userData.emailId=emailId;


      
      let result = axios.post('http://localhost:5000/api/getnotification', { userData })
       
        .then(res =>{   
            this.setState({
                       isLoaded: true,
                       items: res.data.results.rows
                     });

                    })
        
        .catch(error => {
            console.log(" \n\n\n  error  : ",error)
        }) ;

        



    }
   

    render() {

        var componentData;
        var recordElementArray = [];
       
    
        if (this.state.items) {
            let successRecord;

            let notificationItems = [];
            notificationItems = this.state.items;

           notificationItems.map((record, index) => {             
                  console.log("record    :  ",record,"and index:    ",index);
                       successRecord = <tr key={index}>
                           
                           <td>{index+1}</td>                     
                        <td>{record.notificationType}</td>
                        <td>{record.description}</td>

                    </tr>;
                
                    return recordElementArray.push(successRecord);
                });

        }
       

        let recordsTable = (
            <React.Fragment>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Notification Type</th>
                                <th>Details</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {recordElementArray}
                        </tbody>
                    </table>
                </div>
                {/* {this.state.items } */}
            </React.Fragment>
        );

        

        let emptyRecordsMessage = <h4> NO NEW NOTIFICATIONS </h4>;
        componentData = (recordElementArray.length > 0)?
                          (componentData = recordsTable):
                          (componentData = emptyRecordsMessage);


        return (

            <React.Fragment>
       <h2>  NOTIFICATIONS : </h2>
                {componentData}

            </React.Fragment>

        );
    }










   }
  


   export default GetNotificationTable;


// {/* 


// // import React from 'react';
// // import  NotificationList from './NotificationList';

// // const GetNotification = () => (

// //     ///const res =  axios.post('/api/getnotifications',  {text: queryText});



// //     <div>
// //         <h4>Unread Messages </h4>
// //         <NotificationList />
// //     </div>
// // )

// // export default GetNotification; */}













