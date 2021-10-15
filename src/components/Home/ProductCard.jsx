import React, { useContext, useEffect, useState } from 'react';
import { addProductContext } from '../contexts/ProductContext';
import { authContext } from '../contexts/AuthContext';
import {Paper} from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from 'react-bootstrap/esm/Button';
import Typography from '@material-ui/core/Typography';
import PurchaseForm from '../../PurchaseForm/PurchaseForm';
import Favourites from '../../img/favorite.png';
import PropTypes from 'prop-types';
import {emojify} from 'react-emojione';
const useStyles = makeStyles(() => ({
  
    container:{
      
          
      },
    card:{
      maxWidth: "320px",
      maxHeight: "430px", 
      backgroundColor: 'skyBlue' ,
      marginBottom: '30px'
      
    },
    title:{
      textAlign:'center',
      color: "white", 
    },
    cardPrice:{
      textAlign:'center',
      color: 'white',
    },
    imgContainer:{
      margin: '20px',
      // maxWidth: "300px",
      width: "280px",
      maxHeight: "250px",
      height: "100%",
    },
    Img:{
      maxWidth: "280px",
      maxHeight: "250px",
    },
    buttonContainer:{
      display: "flex",
      justifyContent: "space-around",
      margin: '20px 0',
    },
    adminButtonsContainer:{
      display: "flex",
      justifyContent: "space-around",
      margin: "20px 0"
    },

}));


const ProductCard = ({data,onFavouriteClick,isAdded}) => {
 
    const {products, getProducts, deleteProduct, editProduct, addProductToCart,addProductToFav, cart} = useContext(addProductContext)
    const {userEmail, user} = useContext(authContext);
    const [state, setState] = useState(false)
    const [modalShow, setModalShow] = useState(false);
    const classes = useStyles();
    let checkStatus = JSON.parse(localStorage.getItem("user"))
    
    useEffect(() => {
      if (checkStatus) setState(true)
  }, [userEmail])
    
    useEffect(()=>{
        getProducts()
      }, [])
      function handleClick(id){
        deleteProduct(id)
      }
      const checkItemInCart = (id) => {
        const foundItem = cart.products.find((product) => product.item.id === id);
        return foundItem ? 'secondary' : 'default';
      };


      

    return (
        <>
          {products.map(item => (
            <Paper elevation={3} className={classes.card}>
              <div className={classes.topSection}>
                <Paper elevation={3} className={classes.imgContainer}>
                  <img className={classes.Img} src={item.image} alt="" />
                </Paper>
              </div>
              <div className={classes.bottomSection}>
                    <p className={classes.title}>
                      <b><h5>{item.description} :</h5> {item.brand}</b>
                    </p>
                    <p className={classes.cardPrice}>
                      Цена: <b>{item.price}</b> Сом 
                    </p>
                <div className={classes.buttonContainer}>
                    <Button variant="success" onClick={() => setModalShow(true)} style={{fontSize:'14px',height:'50px'}}>
                      Buy <AttachMoneyIcon/> 
                    </Button>
                    <Button variant="warning" onClick={() => addProductToCart(item)} style={{fontSize:'14px',height:'50px'}}>
                      Add to Cart <AddShoppingCartIcon/>
                    </Button>   
                    <Button variant="damage" style={{fontSize:'14px',height:'50px'}}>
                    { isAdded ? emojify(':heart:') : emojify(':black_heart:') }
                    </Button>               
                </div>
                
                {
							state ? (
								userEmail === 'admin@admin.com' ? (
									<div className={classes.adminButtonsContainer}>
                      <button onClick={()=>handleClick(item.id)}>Delete Item<DeleteIcon/></button>
                      <NavLink to="/edit">
                            <button onClick={()=>editProduct(item.id)}>Edit Product<EditIcon/></button>
                      </NavLink>
                </div>
									) : (<></>)
								) : (<></>)
							}
                
              </div>
            </Paper>
            
          ))}
          <PurchaseForm 
      show={modalShow}
      onHide={() => setModalShow(false)}
      />
        </>
    );
};


ProductCard.propTypes={
  onFavouriteClick:PropTypes.func.isRequired,
  isAdded:PropTypes.bool.isRequired,
}

export default ProductCard;