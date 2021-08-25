import {Switch, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Crud from "../../crud";
import "react-toastify/dist/ReactToastify.css";
import Update from "../../crud/Update";


const AboutUs = () => {
    return (
        <div className="about">
         
          <h2>Who We Are</h2>
          <p>Nice to meet you! We are a tech-driven online retailer located near Salt Lake City in the shadow
             of the Wasatch Mountains. Since our beginnings in 1999, Overstock has evolved from
             a amini-stores to multi-large-stores as a result of a hard-working
             and creative team.</p>
             <h2>What We Value</h2>
          <p>We are passionate about doing our part to make life better. We provide high-quality merchandise,
             great value, and exceptional customer service. We connect people
             with products and services in new and unexpected ways. We do our part to create dream
              homes for all.</p>
   
        </div>
    );
};

export default AboutUs;