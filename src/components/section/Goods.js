import React, {useState} from 'react';
import Header from '../../components/Products/Header';
import Main from '../../components/Products/Main';
import Basket from '../../components/Products/Basket';
import data from '../../../src/data';
import Pagination from '../../../src/components/Pagination';


import { useHistory } from 'react-router-dom';

const Goods = () => {
    
        
        const { products } = data;
        const [cartItems, setCartItems] = useState([]);
       
        const onAdd = (product) => {
          const exist = cartItems.find((x) => x.id === product.id);
          if (exist) {
            setCartItems(
              cartItems.map((x) =>
                x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
              )
            );
          } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
          }
        };
        const onRemove = (product) => {
          const exist = cartItems.find((x) => x.id === product.id);
          if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
          } else {
            setCartItems(
              cartItems.map((x) =>
                x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
              )
            );
          }
        };


       return (
          <div className="App">
            <Header countCartItems={cartItems.length}></Header>
            <div className="row">
              <Main products={products} onAdd={onAdd}>
              
              </Main>
              
              <Basket
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
              ></Basket>
            </div>

          
          </div>
        );
        
    
};

export default Goods;