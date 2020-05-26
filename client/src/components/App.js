import React from 'react';

import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from './Header';
import Landing from './pages/Landing';
import About from './pages/About';
import Login from './pages/Login';

import CreateNotification from './notifications/CreateNotification';
import GetNotificationTable from './notifications/GetNotificationTable';





const App = () => {
  return (
      <div> 
           
           <BrowserRouter>
                  <div>
                   <div className="container">

                    {/* <Switch> */}
                       <Header/> 

                      
                       <Route exact path="/getnotification" component={GetNotificationTable}/>
                       <Route exact path="/about" component={About}/>
                       <Route exact path="/createnotification" component={CreateNotification}/> 
                       <Route exact path="/login" component={Login}/>
                       <Route exact path="/logout" component={Login}/>
                       <Route exact path="/" component={Login}/>
                       <Redirect exact from="/" to="login" />
                       {/* <Redirect exact from="/" to="logOut" /> */}
                  
                  {/* </Switch> */}  
                   </div> 
                   </div>
             </BrowserRouter>
       </div>
  );
}

export default App;

