import React, { Component } from 'react';
import './App.css';
import Customers from './Customers'
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Home from './Home';


class App extends Component {
  render() {
    console.log("Host URL" + process.env.PUBLIC_URL);
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
        <a href='/customerPage'>Login</a>
        <a href='/customerPage'>Register</a>
        <a href='/home'>Home</a>
        <a href='/home'>Sign Out</a>


                <Route exact path= "/" render={() => (
                  <Redirect to="/home"/>
                )}/>
                 <Route exact path='/home' component={Home} />
                 <Route exact path='/customerPage' component={Customers} />

      </div>
    </Router>
    );
  }
}

export default App;
