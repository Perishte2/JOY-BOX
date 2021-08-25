import React from 'react';
import {Link} from 'react-router-dom';
import Authorization from './section/Registration';

const Header = () => {
    return (
        <>
            <header>
                <div className="logotype">
                    
                       <img src="/img/running-shoe.png" alt="logotype"/>
                    
                
                      <h3>Joy Box</h3>
                    
                 </div>
                <div className="menu">
                      <ul>
                          <li className="button"><Link to="/">Home</Link></li>
                          <li className="button"><Link to="/goods">Goods</Link></li>
                          <li className="button"><Link to="/aboutUs">About Us</Link></li>
                          <li className="button"><Link to="/contactInfo">Contact Info</Link></li>
                      </ul>
                </div>
                <div className="contactPhone">
                   <img className="phone" src="/img/телефон.jpeg" alt=""/>
                   <h3>+996550055555</h3>
                </div>
                <div className="registration">
                <img src="/img/user.png" alt="user"/>
                <p><Link to="login">Login</Link>| <Link to="Registration"> Register </Link></p>
                </div>
            </header>
        </>
    );
};

export default Header;