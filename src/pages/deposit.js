import React from "react";
import logo from './bank.png';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import "../styles/deposit.css";

function Deposit(){

  let [totalState, setTotalState] = useState(0);
  let [deposit, setDeposit] = useState(0);

  let status = `Account Balance $ ${totalState}`;

  function SubmitButton(){
    if (isNaN(deposit)){
     return (<div>
      <h3>Please enter only numerical values</h3> </div>)
    }
    else {
    if (deposit > 0){
      return (
      <div>
        <button onClick={handleSubmit} type="button" className="btn btn-danger">Deposit</button>
        </div>
      );
    } 
    else if (deposit < 0){
      return(
        <div>
        <button onClick={errorSubmit} type="button" className="btn btn-danger">Deposit</button>
        </div>
      )
    }

    else {
      return (<div>
        <button type="button" disabled className="btn btn-danger">Deposit</button>  
        </div>   )
    };
  };
  };
  const handleSubmit = (event) =>{
    setTimeout(function() {alert("Success!");}, 200);
    let newTotal = parseFloat(totalState) + parseFloat(deposit);
      Number(setTotalState(newTotal));
      event.preventDefault();
  };

  const errorSubmit = () =>{
    setTimeout(function() {alert("Please enter only positive numbers!");}, 200);
  };

  return(
    <div className="card">
      <h1>Deposit <img src={logo} className="Home-logo" alt="bank logo"/></h1>
      <br></br>
      <h5 className="card-h5">Need to make a deposit? Please do so below.</h5>
      <br></br>
      <form>
      <h2 id="total">{status}</h2>
      <input
      // type="number"
      required
      value={deposit}
      onChange={(e) => setDeposit(e.target.value)}
      />
      <SubmitButton/>
      </form>
      <br></br>
  <h3 className="card-header">WELCOME TO BAD BANK</h3>
  <br/>
  <div className="card-body">
    <h5>For all of your banking needs</h5>
    <br></br><br></br>
  </div>
  </div>
    );
  };

  export default Deposit;
