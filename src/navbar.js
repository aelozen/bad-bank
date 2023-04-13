import React from "react";
import { Link } from 'react-router-dom';
import logo from './pages/bank.png';

function NavBar(){
    return(
    <><nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src={logo} className="Home-logo" alt="bank logo"/>
        <a className="navbar-brand" href="/">BadBank</a>
        <div className = "topnav">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-link">
          <Link to="/">Home</Link> </li>
          <li className="nav-link">
          <Link to="/createaccount">Create Account</Link></li>
          <li className="nav-link">
          <Link to="/deposit">Deposit</Link></li>
          <li className="nav-link">
          <Link to="/withdraw">Withdraw</Link></li>
          <li className="nav-link">
          <Link to="/alldata">All Data</Link></li></ul>
        </div>
        </div>
      </nav> 
   </>
    );
  };

export default NavBar;
