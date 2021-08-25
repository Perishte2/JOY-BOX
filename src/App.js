import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import {BrowserRouter as Router} from 'react-router-dom';
import {Switch, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Crud from "./crud";
import "react-toastify/dist/ReactToastify.css";
import Update from "./crud/Update";
import SearchBar from "../src/components/SearchBar";
import BookData from "../src/data";

function App() {
  return (
    <>
   
      <Router>
        
        <Header/>
       
       <Section/>
       <Switch>
            
            <Route exact path="/" component={Crud} />
            <Route exact path="/update/:id" component={Update} />
        </Switch>
      <Footer/>
      
        
        </Router>
        </>
      
     
    
  );
}

export default App;
