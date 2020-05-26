import React from 'react';
import { Link } from 'react-router-dom';
import Login from './pages/Login';

//const Header = () => (
    class Header extends React.Component{


render(){



    return (


    <nav>
        <div className="nav-wrapper">
        <Link to={'/'} className="brand-logo"> Nagarro Online Portal </Link>    
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to={'/getnotification'}> Get Notifications</Link></li>
            <li><Link to={'/createnotification'}>Create Event</Link></li>
            <li ><Link to={'/about'}>About me</Link></li>
            <li><Link to={'/logout'}>Log out
  
    
    </Link></li>
        </ul>

       {/* <Login/>
        */}
       
       </div>
    </nav>



)
    
} 
}
export default Header; 