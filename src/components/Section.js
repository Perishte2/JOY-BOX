
import React from 'react';
import {Route} from 'react-router-dom';
import Content from './section/Content';
import Goods from './section/Goods';
import AboutUs from './section/AboutUs';
import ContactInfo from './section/ContactInfo';
import Registration from './section/Registration';
import Login from './section/Login';

const Section = () => {
    return (
        <div>
            <section>
               <Route path="/" component={Content} exact/>
               <Route path="/goods" component={Goods}/>
               <Route path="/aboutUs" component={AboutUs}/>
               <Route path="/contactInfo" component={ContactInfo}/>
               <Route path="/registration" component={Registration} />
               <Route path="/login" component={Login} />
                </section>
        </div>
    );
};

export default Section;