import React, {useState, useEffect} from "react";
import {toast} from 'react-toastify';
import {getNames, createName, removeName} from "./api";
import {Link} from "react-router-dom";
import FormElement from "./Form";
import Loading from './Loading';
import {EditOutlined,DeleteOutlined} from "@ant-design/icons";


const Crud=()=>{
    const [name,setName]=useState("");
    const [comment,setComment]=useState("");
    const [loading,setLoading]=useState(false);
    const [names,setNames]=useState([]);


    useEffect(()=>{
        loadNames();
        
    }, []);


    console.log("process.env.REACT_APP_API", process.env.REACT_APP_API);

    const loadNames=()=>getNames().then((name)=>setNames(name.data));
   
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
      <div className="container-fluid">
          <div className="row">
              <div className="col-md-8">
                  {loading ? (<Loading />
                  ) : (
                      <>
                      <h4 className="text-center mt-20">Comments </h4>
                <FormElement
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
                             <li className="list-group-item mr-150">{t.name} {t.comment}
                            
                             
                              <span
                              onClick={()=> handleRemove(t.id, t.name,t.comment)}
                              className="btn btn-sm float-left">
                                <DeleteOutlined  className="text-danger" />
                                
                              </span>
                              
                              <Link to={`/update/${t.id}`}>
                              <span className="btn btn-sm float-right">
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