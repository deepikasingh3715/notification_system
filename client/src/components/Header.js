import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav>
        <div className="nav-wrapper">
        <Link to={'/'} className="brand-logo"> Nagarro Online Portal </Link>    
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to={'/getnotification'}> Get Notifications</Link></li>
            <li><Link to={'/createnotification'}>Create Event</Link></li>
            <li><Link to={'/about'}>About me</Link></li>
            <li><Link to={'/logOut'}>Log out</Link></li>
        </ul>
       </div>
    </nav>
)

export default Header; 