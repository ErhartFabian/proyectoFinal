import './App.css';
import React,{Fragment} from 'react';
import { BrowserRouter as Router, Route,Switch,Link,NavLink } from "react-router-dom";
import {Home,Inventory,PaymentProcess} from './components'


function App() {
  return (
    <Fragment>

      <Router>
        <Route path="/home" component={Home}></Route>
      </Router>
    </Fragment>
  );
}

export default App;
