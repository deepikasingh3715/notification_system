import React from 'react';

import {BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './pages/Landing';
import About from './pages/About';
import Login from './pages/Login';

import CreateNotification from './notifications/CreateNotification';
import GetNotification from './notifications/GetNotification';





const App = () => {
  return (
      <div> 
           <BrowserRouter>
                  <div>
                   <div className="container">
                       <Header/>
                       <Route exact path="/getnotification" component={GetNotification}/>
                       <Route exact path="/about" component={About}/>
                       <Route exact path="/createnotification" component={CreateNotification}/> 
                       <Route exact path="/logOut" component={Login}/>
                    
                   </div>
                   </div>
             </BrowserRouter>
       </div>
  );
}

export default App;

