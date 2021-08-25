import React, { useState,useEffect } from 'react';
import { toast} from "react-toastify";
import { updateName, getName, getComment } from "./api";
import FormElement from "./Form";
import Loading from "./Loading";

const Update = ({history, match})=>{
    const [name, setName]=useState("");
    const [comment, setComment]=useState("");
    const [loading, setLoading]=useState(false);

    useEffect(()=>{
        loadName();
        loadComment();
    },[]);

    console.log("params", match.params.id);
    console.log("name", name);

    const loadName=()=>{
        getName(match.params.id).then((d)=>setName(d.data.loadName));
    };

    const loadComment=()=>{
        getComment(match.params.id).then((d)=>setComment( d.data.comment));
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        setLoading(true);
        updateName(match.params.id, {name},{comment}).then((res)=>{
            setLoading(false);
            setName("");
            setComment("")
            toast.success(`${res.data.name} and the comment ${res.data.comment} is updated`);
            history.push("/");
        }).catch((err)=>{
            setLoading(false);
            if(err.response.status === 400) toast.error(err.response.data);
        })
    }
    return(
       <div className="container-fluid ">
       <div className="row">
           <div className="col-md-8">
               {loading ? <Loading /> : <h4>Update Name and comment</h4> }
           <FormElement handleSubmit={handleSubmit} name={name} setName={setName} comment={comment} setComment={setComment}/>
           </div>
       </div>
    </div>
    )
}

export default Update;