import React, { useContext, useState } from 'react'
import { addProductContext } from '../contexts/ProductContext';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
import ProductList from '../Home/ProductList';
import {Container, Grid, Paper} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Button } from 'react-bootstrap';
import ProductCard from '../Home/ProductCard';

const useStyles = makeStyles(()=>({
    title:{
        textAlign: "center"
    },
    paperContainer:{
        maxWidth: "1200px",
        minHeight:"500px",
        margin: "20px auto",
        padding: "20px 0"
    },
    inputContainer:{
        display: "flex",
        flexDirection: "column",
        alignItems:"baseline",
        justifyContent:"space-around",
        margin: "0 auto",
        maxWidth: "1050px",
        minHeight: "150px"
    },
    InputGrid:{
        maxWidth: "800px",
        display: "flex",
        
    }, 
    TextField : {
        marginTop:"30px",
        borderRadius:"8px",
        backgroundColor:"wheat"
    },
    addButton:{
        height:"60px",
        width:"200px",
        fontSize:"10px",
        backgroundColor:"yellow",
        marginTop:"20px"
    }
}))

const brands = [
    {
        label:"Adidas"
    },
    {
        label: 'Nike',
    }, 
    {
        label: 'Air Jordan',
    },
    {
        label: 'Puma',
    }
  ];

const AddProductPage = () => {
    const [inpBrand, setInpBrand] = useState('Adidas')
    const [inpDescription, setInpDescription] = useState('')
    const [inpPrice, setInpPrice] = useState('')
    const [inpImage, setInpImage] = useState('')
    
    const  {addProduct} = useContext(addProductContext)
    function handleClick (){
        let newObj={    
            brand:inpBrand,
            description: inpDescription,
            price: inpPrice,
            image: inpImage,
        }
        addProduct(newObj)
        setInpBrand('')
        setInpDescription('')
        setInpPrice('')
        setInpImage('')
    }
    
    const classes = useStyles();

    return (
        <>
            <h1 className={classes.title}>Добавить новый товар</h1>
        <Paper className={classes.paperContainer}>
            <Container className={classes.InputGrid}>
                <Container className={classes.inputContainer}>
                    <TextField
                        required
                        id="outlined-brand"
                        label="Бренд сникерса"
                        variant="filled"
                        value={inpBrand}
                        onChange={(e) =>setInpBrand(e.target.value)}
                        className={classes.TextField}
                    />
                   
                    <TextField
                        required
                        id="outlined-desc"
                        label="Описание сникерса"
                        variant="filled"
                        value={inpDescription}
                        onChange={(e) =>setInpDescription(e.target.value)}
                        className={classes.TextField}
                    />
                    <Button className={classes.addButton} onClick={handleClick} style={{backgroundColor:"lightGreen"}} >Добавить в товары</Button>{' '}
                </Container>
                <Container className={classes.inputContainer}>
                    <TextField
                        required
                        id="outlined-price"
                        label="Цена сникерса"
                        variant="filled"
                        value={inpPrice} 
                        onChange={(e) =>setInpPrice(e.target.value)}
                        className={classes.TextField}
                    />
                    <TextField
                        required
                        id="outlined-URL"
                        label="URL картинка"
                        variant="filled"
                        onChange={(e) =>setInpImage(e.target.value)}
                        className={classes.TextField}
                    />
                    <TextField
                        id="outlined-select-category"
                        select
                        label="Выберите бренд сникерса"
                        value={inpBrand}
                        onChange={(e)=> setInpBrand(e.target.value)}
                        style={{width:"220px"}}
                        variant="filled"
                        className={classes.TextField}
                        >
                        {brands.map((option) => (
                            <MenuItem key={option.label} value={option.label}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Container>
            </Container>
        </Paper>
            
        </>
    );
};

export default AddProductPage;