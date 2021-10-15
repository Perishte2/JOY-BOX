
import 'bootstrap/dist/css/bootstrap.min.css';
import Comments from '../src/components/crud/crud';
import {Switch, Route} from "react-router-dom";
import Footer from '../src/components/Footer';
import Update from "../src/components/crud/crud/Update";
import Header from '../src/Header/Header';
import React,{Component} from 'react';
// import Home from '../components/section/Content';
import ProductContextProvider from '../src/components/contexts/ProductContext';
// import AddProduct from '../components/Admin/AddProduct';
// import EditProduct from '../components/Admin/EditProduct';
// import Cart from '../components/../Cart/Cart';
// import Login from '../components/Auth/Login';
// import Registration from '../components/Auth/Registration';
import AuthContextProvider from '../src/components/contexts/AuthContext';
// import Payment from '../components/Payment/Payment';
// import ProductList from '../components/Home/ProductList';
// import ContactInfo from '../components/section/ContactInfo';
import Content from '../src/components/section/Content'
import Routes from '../src/Routes/Routes'
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  

 return (
    <>
    <Router>
    <AuthContextProvider>
           <ProductContextProvider>
     <Header  />
     <Routes />
     <Switch>
     <Route exact path="/" component={Comments} style={{marginTop:'50px'}}/>
     <Route exact path="/update/:id" component={Update} />
     </Switch>
        <Footer />
        </ProductContextProvider>
           </AuthContextProvider>
           </Router>
     </>
    
  );
}

export default App;
