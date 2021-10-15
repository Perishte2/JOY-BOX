import React, {useState, useEffect} from "react";
import {toast} from 'react-toastify';
import {getNames, createName, removeName} from "./api";
import {Link} from "react-router-dom";
import FormElement from "./Form";
import Loading from './Loading';
import {EditOutlined,DeleteOutlined} from "@ant-design/icons";
import userPhoto from '../../../img/user.jpeg';



const Crud=()=>{
    const [name,setName]=useState("");
    const [comment,setComment]=useState("");
    const [loading,setLoading]=useState(false);
    const [names,setNames]=useState([]);
   


    useEffect(()=>{
        loadNames();
        
        
    }, []);

    
    

    // console.log("process.env.REACT_APP_API", process.env.REACT_APP_API);

    const loadNames=()=>getNames().then((name,comment)=>setNames(name.data) );
    
   
    const handleSubmit=(e)=>{
   e.preventDefault();
   setLoading(true);
   createName({name,comment})
   .then((res)=>{
       setLoading(false);
       setName("");
       setComment("");
    toast.success(`${res.data.name} and   ${res.data.comment} is created `);
    loadNames();
   }).catch((err)=>{
       setLoading(false);
       if(err.response.status === 400) 
       toast.error(err.response.data)
   })
   }


   const handleRemove=(id,name,comment)=>{
       if(window.confirm("Are you sure wanted to delete?"))
       setLoading(true)
       removeName(id).then((res)=>{
           setLoading(false);
           toast.error(`${name} and ${comment} is deleted`);
           loadNames();
       })
       .catch((err)=>{
           if(err.response.status === 400){
               setLoading(false);
               toast.error(err.response.data);
           }
       });
    }
    
    return(
      <div className="container-fluid" style={{marginTop:'50px',marginBottom:'250px',width:'50%',marginLeft:'600px'}}>
          <div className="row">
              <div className="col-md-8">
                  {loading ? (<Loading />
                  ) : (
                      <>
                      <h4 className="text-center mt-20" style={{marginTop:'120px'}}>Comments </h4>
                <FormElement style={{marginTop:'50px'}}
                handleSubmit={handleSubmit}
                name={name}
                setName={setName}
                comment={comment}
                setComment={setComment}
                />
                {names && names.map((t)=>(
                      <div 
                      className="border row mx-2 align-items-center"
                       key={t.id}>
                          <ul className="list-group">
                             <li className="list-group-item mr-150"><img src={userPhoto} alt="user"
                             style={{width:'50px',height:'50px',marginRight:'40px'}} 
                             />  {t.name}  {t.comment} 
                            
                             
                              <span
                              onClick={()=> handleRemove(t.id, t.name,t.comment)}
                              className="btn btn-sm float-left" style={{marginLeft:'30px'}}>
                                <DeleteOutlined  className="text-danger" />
                                
                              </span>
                              
                              <Link to={`/update/${t.id}`}>
                              <span
                               className="btn btn-sm float-right" style={{marginLeft:'20px'}}>
                                <EditOutlined  className="text-warning" />
                              </span>
                              </Link>
                              </li>
                             </ul>
                              
                              
                          </div>
                
                  ))}
                  </>
                  )}
              </div>

          </div>

      </div>

  );
};

export default Crud;