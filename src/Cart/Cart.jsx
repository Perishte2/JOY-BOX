import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import {useProducts} from '../components/contexts/ProductContext';
import {IconButton,Tab,Typography} from '@material-ui/core';
import Header from '../Header/Header';
import PurchaseForm from '../PurchaseForm/PurchaseForm';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles=makeStyles({
  table:{
      minWidth:650,
  },
  tableCellImg:{
      width:50
  },
  button:{
      marginTop:11
  },
  a:{
      height: '40vh'
  },
});


export default function Cart(){
   const classes=useStyles();
   const [count, setCount]=useState([]);
   const [modalShow, setModalShow]=useState(false);
   const {cart, getCart, changeProductCount, deleteFromCart} = useProducts();

   useEffect(()=>{
       getCart()
   },[])

   useEffect(()=>{
       setCount();
   }, [cart])
    useEffect(()=>{
        
    })


    const handleCountChange=(count,id)=>{
        changeProductCount(count,id);
    };



    return (
        <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="right">Brand</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Count</TableCell>
              <TableCell align="right">SubPrice</TableCell>
              <TableCell align="right">Deleting</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart?.products?.length > 0 &&
              cart.products.map((product) => (
                <TableRow key={product.item.id}>
                  <TableCell>
                    <img className={classes.tableCellImg} src={product.item.image} alt={product.item.title} />
                  </TableCell>
                  <TableCell align="right">{product.item.brand}</TableCell>
                  <TableCell align="right">{product.item.price}</TableCell>
                  <TableCell align="right">
                    <input
                      type="number"
                      value={product.count}
                      onChange={(e) => handleCountChange(e.target.value, product.item.id)}
                      style={{fontSize:"20px",paddingTop:"30px",paddingBottom:"20px"}}
                    />
                  </TableCell>
                  <TableCell align="right">{product.subPrice}</TableCell>
                  <TableCell align="right">
                  <IconButton 
                    aria-label="delete"
                    onClick={e => deleteFromCart(product.item.id, product.item.price)}
                    style={{borderRadius:"8px",width:"80px"}}
                    >
                    <DeleteIcon />
                  </IconButton>
                  
                  {/* {console.log(product.item.id)} */}
                  </TableCell>
                </TableRow>
              ))}

            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>
                <Typography variant="h5">Total:</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h5">{cart.totalPrice}</Typography>
              </TableCell>
              <Button variant="contained" color="primary" className={classes.button} onClick={() => setModalShow(true)}>
                Купить
              </Button>
            </TableRow>
            
          </TableBody>
        </Table>
      </TableContainer>
      <PurchaseForm 
      show={modalShow}
      onHide={() => setModalShow(false)}
      />
      <div className={classes.a}>
      </div>
    </>
  );
}