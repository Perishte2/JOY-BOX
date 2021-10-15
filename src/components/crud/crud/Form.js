import React , {useState} from "react";
import { Input } from "antd";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";



const FormElement=({ handleSubmit,name,setName,comment, setComment}) => (
    
    
    
    (<form onSubmit={handleSubmit} style={{marginTop:'0px'}}>
        <div className="form-group">
            <Input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            style={{ width: "50%" }}
            autoFocus
            required
            />
           
             <Input className="crudForm"
            type="text"
            placeholder="Enter your comment"
            value={comment}
            onChange={(e)=>setComment(e.target.value)}
            style={{ width: "50%" }}
            autoFocus
            required
            />

                                {/* <DatePicker 
                             
                             dateFormat='dd/MM/yyyy'
                             maxDate={new Date()}
                            />       */}
            <br/>
            <br></br>
            <button className="btn btn-primary mt-1" style={{marginLeft:'70px',marginRight:'30px'}}>Submit</button>
            <button className="btn btn-danger mt-1" onClick={()=>setName("")} >
                Cancel
                </button>
        </div>
    </form>
    )
);

export default FormElement;