import './App.css';
import React,{Fragment} from 'react';
import {Home,Inventory,PaymentProcess} from './components'
import { BrowserRouter as 
  Router, 
  Route,
  Switch,
  Link,
  NavLink } from "react-router-dom";


function App() {


  return (
    <Fragment>

      <Router>
        {/* ruta a home */}
        <Route path="/home" component={Home} />
        {/* ruta a  Inventory*/}
        <Route path="/inventory" component={Inventory} />
        {/* ruta para paymenprocess */}
        <Route path="/paymentprocess" component={PaymentProcess} />

      </Router>

    </Fragment>
  );
}

export default App;
