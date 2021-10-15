import React, { useContext, useEffect, useState } from 'react';
import { addProductContext } from '../contexts/ProductContext';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, useHistory } from 'react-router-dom';
import ProductCard from './ProductCard';
import Header from '../../Header/Header'
import { FormControlLabel, Grid, FormControl, Radio, RadioGroup, FormLabel, Paper, Container } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { Button } from 'react-bootstrap';


const useStyles = makeStyles(() => ({
    
    title:{
        textAlign: "center"
    },
    paper:{
        maxWidth: "1200px",
        width:'100%',
        display: "flex",
        flexWrap: "wrap",
        margin: "0 auto",
        justifyContent: "space-evenly",
        height:'600px'
    },
    sideBar:{
        marginLeft:"30px",
        maxWidth:"600px",
        height:"600px"
    },
    filterContainer:{
        maxWidth: "700px",
        maxHeight:"800px",
        margin: '0 auto',
        marginLeft:"30px",
        marginTop:"50px",
        float:"left"
    },
    filter:{
        display: 'flex',
        padding: '40px 40px',
        justifyContent: 'space-around',
        marginLeft:"20px"
    },
    paginationContainer:{
        margin: '20px auto',
        display: 'flex',
        justifyContent: 'center'
    },
    wrapper:{
        display: 'flex',
        maxHeight:'500px'
    },
    buttonContainer:{
        display:'flex',
        justifyContent: 'center',
        paddingBottom: '10px',
      
    }
    ,
    h5 : {
        paddingLeft:'20px'
    },
    fieldset: {
        marginLeft:'20px'
    },
    button:{
        backgroundColor:"red"
        }
  }));


const ProductList = () => {
    const {products, getProducts, deleteProduct, paginationPages,editProduct, filterProductsByPrice} = useContext(addProductContext)
    const classes = useStyles();
    const history = useHistory();
    const [page, setPage] = useState(1);
    

    function getPage(){
        const search = new URLSearchParams(history.location.search)
        return search.get('_page')
    }


     


    const handlePage = (e, page) => {
        const search = new URLSearchParams(history.location.search)
        search.set('_page', page);
        history.push(`${history.location.pathname}?_limit=3${search.toString()}`)
        setPage(page);
        getProducts(history)
    }
    useEffect(()=>{
        getProducts()
      }, [])
    useEffect(()=>{})
   
      function fetchProducts(params, value) {
        let search = new URLSearchParams(history.location.search)
        search.set(params, value)
        let url = `${history.location.pathname}?${search.toString()}`
        history.push(url)
        getProducts(history)
    }

    function reset() {
        history.push('/catalog')
        getProducts(history)
    }

    function filterByPrice(value) {
        filterProductsByPrice(value)
    }

    return (
        <div style={{height:"700px"}}>
                <div className={classes.filterContainer}>
                    <Grid>
                        <Paper className={classes.sideBar}>
                            <div className={classes.filter}>
                                <Grid>
                                    <FormControl component="fieldset">
                                            <h5>Поиск по брендам </h5>
                                        <RadioGroup onChange={(e) => fetchProducts("brand", e.target.value)} arial-label="brand" name="brand">
                                            <FormControlLabel value="Adidas" control={<Radio />} label="Adidas" />
                                            <FormControlLabel value="Air Jordan" control={<Radio />} label="Air Jordan" />
                                            <FormControlLabel value="Nike" control={<Radio />} label="Nike" />
                                            <FormControlLabel value="Puma" control={<Radio />} label="Puma" />
                                            
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid >
                                    <FormControl component="fieldset">
                                            <h5 style={{marginLeft:'10px'}}>Поиск по ценам</h5>
                                        <RadioGroup onChange={(e) => fetchProducts("price", e.target.value)} arial-label="price" name="price">
                                            <FormControlLabel value="1000" control={<Radio />} label="1000" />
                                            <FormControlLabel value="800" control={<Radio />} label="800" />
                                            <FormControlLabel value="8000" control={<Radio />} label="8000" />
                                            <FormControlLabel value="700" control={<Radio />} label="700" />
                                            <FormControlLabel value="3000" control={<Radio />} label="3000" />
                                            <FormControlLabel value="900" control={<Radio />} label="900" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                            </div>
                            <div className={classes.buttonContainer}>
                                <Button onClick={reset} style={{backgroundColor:"Bisque",height:"50px",fontSize:"14px"}}>
                                    Reset Filter
                                </Button>
                            </div>
                        </Paper>
                    </Grid>
                </div>
            <h1 className={classes.title}>Сникерсы и Кеды</h1>
            <div className={classes.wrapper}>
                
                <Paper className={classes.paper}>
                    <ProductCard />
                </Paper>
            </div>
            <div  className={classes.paginationContainer}>
                <Pagination count={paginationPages} page={page} onChange={handlePage} size="large" style={{borderRadius:'8px'}} />
            </div>
        </div>
    );
};

export default ProductList;