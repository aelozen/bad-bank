import React from "react";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import logo from './bank.png';
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "../components/userlist";
import '../styles/userlist.css';

function AllData() {
  const userData = useSelector(state => state.userData);
  const history = useHistory();

  const handleNewAccount = () => {
    history.push({
      pathname: '/createaccount'
    });
  }
  return (
    <div className="card">
      <h1>All Data <img src={logo} className="Home-logo" alt="bank logo" /></h1>
      <h5>No security? <strong>No problem.</strong> All of your data can be found below.</h5>
      <br></br>
      <br />
      <div>
        <button onClick={handleNewAccount}
          type="button" className="btn btn-danger">Add Another Account</button>
      </div>
      <div className="alldata">
        {userData && <UserList users={userData} />}
      </div>
    </div>
  );
};

export default AllData;