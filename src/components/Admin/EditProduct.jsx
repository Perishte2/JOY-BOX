import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router';
import {useProducts} from '../contexts/ProductContext';
import {handleInp} from '../helpers/functions';
import {Button, Container, Paper, TextField, makeStyles} from '@material-ui/core'   ;
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';


const useStyles=makeStyles(theme => ({
   paper: {
       padding:  theme.spacing(2),
       color: theme.palette.text.secondary,
       margin: '40px auto',
       maxWidth: 800
   },
   title: {
       textAlign: "center",
       color: "grey",
   },
   container : {
       display: "flex",
       justifyContent: "space-around",
       flexDirection: "row",
       color: "black"
   },
   form: {
       dispaly: "flex",
       flexDirection: "column",
   },
   textfield: {
       marginTop: 10
   }
}));

const handleClick=()=>{

}

const EditProduct = () => {
    const {id} = useParams()
    const [product,setProduct]=useState({
        title:'',
        brand:'',
        image:'',
        description:'',
        price:0,
    })
    const classes=useStyles();
    const {getProductDetails, productDetails, history, saveEditedProduct} = useProducts();
    useEffect(()=>{
        getProductDetails(id)
    }, [])

    useEffect(()=>{
        setProduct(productDetails)
    }, [productDetails])
    return (
       <Paper elevation={3} className={classes.paper}>
           <h1 className={classes.title}>Add Product</h1>
           <Container className={classes.container}>
               <img style={{with:400}} src={product.image? product.image: "https://i.ytimg.com/vi/qvE00WdAUI4/sddefault.jpg"} />
               <form className={classes.form} noValidate autoComplete="off">
                   <TextField
                   name="title"
                   variant="outlined"
                   value={product.title}
                   label="Title"
                   onChange={(e)=>handleInp(e, product, setProduct)}
                   className={classes.textfield}
                   />
                   <TextField
                   name="description"
                   variant="outlined"
                   value={product.description}
                   label="Title"
                   onChange={(e)=>handleInp(e, product, setProduct)}
                   className={classes.textfield}
                   />
                   <TextField
                   name="brand"
                   variant="outlined"
                   value={product.brand}
                   label="Brand"
                   onChange={(e)=>handleInp(e, product, setProduct)}
                   className={classes.textfield}
                   />
                   <TextField
                   name="image"
                   variant="outlined"
                   value={product.image}
                   label="Title"
                   onChange={(e)=>handleInp(e, product, setProduct)}
                   className={classes.textfield}
                   />
                   <TextField
                   name="price"
                   variant="outlined"
                   value={product.price}
                   label="Title"
                   onChange={(e)=>handleInp(e, product, setProduct)}
                   className={classes.textfield}
                   />
                   <Container>
                       <Button 
                       onCLick={()=>saveEditedProduct(product.id),product}
                       >
                           <SaveIcon />
                       </Button>
                       <Button onCLick={()=>history.push('/')} >
                           <CancelIcon />
                           </Button>

                       </Container>
               </form>
           </Container>
       </Paper>

    );
};

export default EditProduct;