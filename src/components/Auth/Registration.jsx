import{Container, Grid, TextField, Button, Typography, CircularProgress} from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import {useAuth} from '../contexts/AuthContext';
import {useHistory} from 'react-router-dom';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props){
    return <MuiAlert elevation={6} variant="filled" {...props} />
}


const Registration=()=>{
    const [newUser, setNewUser]=useState({});
    const {registerUser, user, loading, errorMessage, success, clearState}=useAuth();
    const history=useHistory();


    const handleChange=(e)=>{
       let newObj={
           ...newUser,
       };
    
    newObj[e.target.name]=e.target.value;
    setNewUser(newObj);
    }


    const signup=(e)=>{
        e.preventDefault();
        try{
            registerUser(newUser);
        }catch(e){
            console.log(e);
        }
    };

    useEffect(()=>{
        if(success){
            history.push('/login');
        }

        return()=>{
            clearState();
        };
    },[success]);


    return    (
         <Container component="main" maxWidth="xs" >
             <form action="" onSubmit={signup}>
                 <Grid container>
                     <div>
                         <Typography component="h1" variant="h5">
                             Registration
                         </Typography>
                         {errorMessage ? <Alert severity="error">{errorMessage}</Alert> : null}
                    </div>
                    <Grid>
                        <TextField
                        onChange={(e)=>handleChange(e)}
                        name="email"
                        variant="outlined"
                        required
                        label="Email Address"
                        style={{marginTop:"30px",borderRadius:"15px"}}
                        />
                        <TextField onChange={(e)=>handleChange(e)} name="password" variant="outlined" style={{marginTop:"30px",borderRadius:"15px"}} required label="Password" />
                        <TextField variant="outlined" required label="Password again" style={{marginTop:"30px",borderRadius:"15px"}} />
                    </Grid>
                    <Button variant="contained" color="primary" type="submit" style={{marginTop:"30px",borderRadius:"15px"}} disabled={loading} >
                        {loading ? <CircularProgress /> : 'Sign Up'}
                    </Button>
                 </Grid>
             </form>

         </Container>
    );
};


export default Registration;