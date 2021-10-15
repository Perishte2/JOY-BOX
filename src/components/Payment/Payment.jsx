import React from 'react';
import Cards from 'react-credit-cards';
import "react-credit-cards/es/styles-compiled.css";
import {createBrowserHistory} from "history";
import {makeStyles} from '@material-ui/core/styles';



export default class Payment extends React.Component{
   
    state={
        cvc:"",
        expiry:"",
        focus:"",
        name:"",
        number:""
    };


    handleInputFocus=(e)=>{
        this.setState({focus: e.target.name});
    };


    handleInputChange=(e)=>{
        const {name,value}=e.target;
        this.setState({[name]: value});
    };
    paynow=()=>{
        localStorage.clear()
        const {history}=this.props;
        history.push("/");
    };

    render(){
        return(
          <div id="PaymentForm" style={{marginTop:"100px"}}>
              <Cards  
              cvc={this.state.cvc}
              expiry={this.state.expiry}
              focused={this.state.focused}
              name={this.state.name}
              number={this.state.number}
              style={{maxWidth:"300px"}}
              />
              <form className="inp_form" style={{marginTop:"100px"}}>
                  <input className="inp_input"
                  type="tel"
                  name="number"
                  placeholder="Card number"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                  style={{marginTop:"20px",paddingBottom:"10px",paddingTop:"40px",textAlign:"center"}}
                  />
                  <input
                  className="inp_input"
                  type="tel"
                  name="number"
                  placeholder="Card Name"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                  style={{marginTop:"20px",paddingBottom:"10px",paddingTop:"40px",textAlign:"center"}}
                  />
                  <input
                  className="inp_input"
                  type="tel"
                  name="cvc"
                  placeholder="CVC"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                  style={{marginTop:"20px",paddingBottom:"10px",paddingTop:"40px",textAlign:"center"}}
                  />
                  <input
                  className="inp_input"
                  type="tel"
                  name="expiry"
                  placeholder="expiry"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                  style={{marginTop:"20px",paddingBottom:"10px",paddingTop:"40px",textAlign:"center"}}
                  />
                  <button className="pay_now" onCLick={this.paynow} style={{marginTop:"30px"}}>
                      Pay now
                  </button>
              </form>
          </div>
        );
    };
};
