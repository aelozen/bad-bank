import './styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './navbar.js';
import Home from './pages/home.js';
import CreateAccount from './pages/createaccount.js';
import Withdraw from './pages/withdraw.js';
import Depo from './pages/deposit.js';
import AllData from './pages/alldata.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
          <div className="container" style={{ padding: "20px" }}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/createaccount/">
                <CreateAccount />
              </Route>
              <Route exact path="/deposit/">
                <Depo />
              </Route>
              <Route exact path="/withdraw/">
                <Withdraw />
              </Route>
              <Route exact path="/alldata/">
                <AllData />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;