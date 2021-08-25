import React, {useState, useEffect} from 'react';


const Authorization =() =>{
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [emailDirty, setEmailDirty]=useState(false);
  const [passwordDirty, setPasswordDirty]=useState(false);
  const [emailError, setEmailError] = useState("Email cannot be empty!");
  const [passwordError, setPasswordError] = useState("Password cannot be empty!");
  const [formValid, setFormValid] =  useState(false);
  // const [surname, setSurname]=useState('');
  // const [name, setName]=useState('');
  



  useEffect(()=>{
    if(emailError && passwordError ){
      setFormValid(false)
    }else{
      setFormValid(true)  
      
    }
  }, [emailError, passwordError])



  //  const nameHandler=(e)=>{
  //    setName(e.target.value);
  //    if(!e.target.value){
  //      setName('Name can not be empty!');
  //    }else{
  //      setName('');
  //    }
  //  }


  //  const surnameHandler=(e)=>{
  //   setSurname(e.target.value);
  //   if(!e.target.value){
  //     setSurname('Surname can not be empty!');
  //   }else{
  //     setSurname('');
  //   }
  // }


   const emailHandler=(e)=>{
     setEmail(e.target.value)
     const re= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if(!re.test(String(e.target.value).toLowerCase())){
     setEmailError("Incorrect email")
   }else{
     setEmailError("")
   }
  }

  const passwordHandler = (e)=>{
    setPassword(e.target.value)
    if(e.target.value.length<3 || e.target.value.length>8){
      setPasswordError("Password must contein more than 3 letter and less than 8 letters");
      if(!e.target.value){
        setPasswordError("Password must not be empty!");

      }
    }else{
      setPasswordError('')
    }
  }
    const blurHandler = (e) => {
      switch(e.target.name){
        case 'email':
          setEmailDirty(true)
          break;
          case 'password':
            setPasswordDirty(true)
            break;
      }
    }

  return(
  <div >
    <form>
      <h1>Registration</h1>
      {/* <input onChange = {e=>surnameHandler(e)} value={surname}  name="surname" type="text" placeholder="Enter your surname ..."/>
      <input onChange = {e=>nameHandler(e)} value={name}  name="name" type="text" placeholder="Enter your name ..."/> */}
      {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
      <input className="form" onChange = {e=>emailHandler(e)} value={email} onBlur={e=>blurHandler(e)} name="email" type="text" placeholder="Enter your email ..."/>
      <br/>
      {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
      <input className="form" onChange={e=>passwordHandler(e)} value={password} onBlur={e=>blurHandler(e)} name="password" type="password" placeholder="Enter your password..."/>
    <br/>
    <button disabled={!formValid} className="authBtn" type="submit">Registration</button>
    </form>

  </div>
)
};

export default Authorization;
