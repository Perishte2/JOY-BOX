import React from 'react';
import { Route} from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../components/section/Content';
import ProductContextProvider from '../components/contexts/ProductContext';
import AddProduct from '../components/Admin/AddProduct';
import EditProduct from '../components/Admin/EditProduct';
import Cart from '../components/../Cart/Cart';
import Login from '../components/Auth/Login';
import Registration from '../components/Auth/Registration';
import AuthContextProvider from '../../src/components/contexts/AuthContext';
import Footer from '../components/Footer';
import Payment from '../components/Payment/Payment';
import ProductList from '../components/Home/ProductList';
import ContactInfo from '../components/section/ContactInfo';
import Favourites from '../components/Favourites';





const Routes = () => {
    return (
        
       
       <AuthContextProvider>
           <ProductContextProvider>
              
               
               {/* <Switch> */}
               <section>
                   <Route exact path="/" component={Home} />
                   <Route exact path="/add" component={AddProduct} />
                   <Route exact path="/edit" component={EditProduct} />
                   <Route exact path="/cart" component={Cart} />
                   <Route exact path="/login" component={Login} />
                   <Route exact path="/registration" component={Registration} />
                   
                   <Route exact path="/catalog" component={ProductList} />
                   <Route exact path="/payment" component={Payment} />
                   <Route exact path="/contactInfo" component={ContactInfo} />
                    <Route exact path="/favourites" component={Favourites}
                   /> 
                   
               </section>
               
               
           </ProductContextProvider>
           </AuthContextProvider>
    //    </BrowserRouter>
    );
};

export default Routes;













                                                                                                                               