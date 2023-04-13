import React from "react";
import logo from './bank.png';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';


function Withdraw(){
  const [totalState, setTotalState] = useState(100);
  const [withdraw, setWithdraw] = useState(0);

  let status = `Account Balance $ ${totalState}`;

  function SubmitButton(){
    if (isNaN(withdraw)){
      return (<div>
       <h3>Please enter only numerical values</h3> </div>)
     }
    else {
    if (withdraw){
      return (
      <div>
        <button onClick={handleSubmit} type="button" className="btn btn-danger">Withdraw</button>
        </div>
      );
    }
    else {
      return (
        <div>
       <button type="button" disabled className="btn btn-danger">Withdraw</button>
       </div>
      )
    };
  };
  };
  const handleSubmit = (event) =>{
      let newTotal = parseFloat(totalState) - parseFloat(withdraw);
      Number(setTotalState(newTotal));
      event.preventDefault();
      if (newTotal >= 0){
        setTimeout(function() {alert("Success!");}, 200);
      }
      else {
        setTimeout(function() {alert("Transaction failed!");}, 200);
      }
  }

  return(
    <div className="card">
      <h1>Withdraw <img src={logo} className="Home-logo" alt="bank logo"/></h1>
      <br></br>
      <h5 className="card-h5">Need to make a withdrawal? Please do so below.</h5>
      <br></br>
      <form>
      <h2 id="total">{status}</h2>
      <input
      // type="number"
      required
      value={withdraw}
      onChange={(e) => setWithdraw(e.target.value)}
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

  export default Withdraw;
