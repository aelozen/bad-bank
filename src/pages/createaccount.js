import '../styles/createaccount.css';
import logo from './bank.png';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { useForm, ErrorMessage } from "react-hook-form"; update with this in future for streamline

function CreateAccount() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  function SubmitButton() {
    if (name && email && password) {
      return (
        <div>
          <button onClick={handleSubmit}
            type="button" className="btn btn-danger">Submit</button>
        </div>
      );

    } else {
      return <button type="button" disabled className="btn btn-danger">Submit</button>
    };
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validateName = (name) => {
    const re =
      /^[a-zA-Z]+$/
    return re.test(String(name).toLowerCase());
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setError('Invalid Email');
    }

    else if (!validateName(name)) {
      setError('Invalid Name');

    }

    else if (password.length < 8) {
      setError('Password must be at least 8 characters long');

    }

    else {
      const user = {
        name: name.replaceAll(" ", "").toLowerCase(),
        email: email.replaceAll(" ", "").toLowerCase(),
        password: password,
      };
      window.confirm("Success!");


      dispatch({
        type: 'SET_USER_DATA',
        payload: user
      });
      history.push({
        pathname: '/alldata'
      });

    }
  }

  return (
    <div className="card">
      <h1>Create Account <img src={logo} className="Home-logo" alt="bank logo" /></h1>
      <br></br>
      <h5 className="card-h5">New user? Use the form below to create a new account with us.</h5>
      <br></br>
      <div className="error">
        {error && <div style={{ color: 'red' }}> {error} </div>}
      </div>
      <form
        className="card-form">
        <label>Name:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <label>Email:</label>
        <input
          type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <label>Password:</label>
        <input
          type="text"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br></br>
        <SubmitButton />
      </form>
      <h3 className="card-header">WELCOME TO BAD BANK</h3>
      <br />
      <div className="card-body">
        <h5>For all of your banking needs</h5>
        <br></br><br></br>
      </div>
    </div>
  );
};
export default CreateAccount;