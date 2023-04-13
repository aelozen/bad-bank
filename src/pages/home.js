import React from "react";
import logo from './bank.png';
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
    return(
    <div className="card">
      <h1>Home</h1>
      <br></br>
      <h5>Please use the navigation bar above to select your desired page.</h5>
  <h3 className="card-header">WELCOME TO BAD BANK</h3>
  <br/>
  <div className="card-body">
    <h5>For all of your banking needs</h5>
    <img src={logo} className="App-logo" alt="bank logo"/>
  </div>
  </div>
    );
  };
  
  export default Home;