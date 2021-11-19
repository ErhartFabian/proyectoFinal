import './App.css';
import React,{Fragment} from 'react';
import {Home,Inventory,PaymentProcess} from './components'
import { BrowserRouter as 
  Router, 
  Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";


function App() {


  return (
    <Fragment>
     
      <Router>
         <Switch>
          {/* ruta a home */}
          <Route path="/home" component={Home} />
          {/* ruta a  Inventory*/}
          <Route exact path="/inventory" component={Inventory} />
          {/* ruta para paymenprocess */}
          <Route path="/paymentprocess" component={PaymentProcess} />
          
          <Route path="/" exact component={Home}></Route>

          <Route path="/" render={()=>{
            return(
              <div className="component" style={{fontSize:"100px",display:'flex',justifyContent:"center"}} >

                <h1>404 NOT FOUND</h1>
              </div>
            )
          }
          }></Route>
        </Switch>
      </Router>

    </Fragment>
  );
}

export default App;
