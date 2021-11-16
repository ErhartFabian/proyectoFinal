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
        <Route exact path="/" component={Home} />
      </Router>

    </Fragment>
  );
}

export default App;
