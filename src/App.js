import './App.css';
import React,{Fragment,useState,useEffect} from 'react';
import {Home,Inventory,PaymentProcess,ShoppingCart} from './components'
import axios from 'axios';
import { BrowserRouter as 
  Router, 
  Route,
  Switch,
} from "react-router-dom";


function App() {

  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState('idle_st'); 
  const [cartCount, setCartCount] = useState([]);


    useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=12')
    .then(response => {
        setLoad('loading_st');
        var newproducts = [];
        for (let i = 0; i < response.data.length; i++) {
            newproducts.push(response.data[i]);
        }
        setProducts(newproducts);
        setLoad('complete_st');
    })
    .catch(error => {
        console.log(error);
    });

    }, []);


    console.log(products);



  return (
    <Fragment>
     
      <Router>
         <Switch>
          {/* ruta a home */}
          <Route path="/home">
            <Home products={products}/>
          </Route>
          {/* ruta a  Inventory*/}
          <Route exact path="/inventory">
            <Inventory products={products} load={load} cartCount={cartCount} setCartCount={setCartCount} />
          </Route>
          {/* ruta para paymenprocess */}
          <Route path="/paymentprocess" component={PaymentProcess} />

          <Route path="/shoppingcart" component={ShoppingCart} />
          
          <Route path="/" exact component={Home}></Route>
          

          <Route path="/" render={()=>{
            return(
              <div className="component" style={{fontSize:"100px",display:'flex',flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#ffbc01",width:"100vw",height:"100vh"}} >
                <img src="https://dinahosting.com/blog/cont/uploads/2021/03/error-404.jpg" height="600px" alt=""></img>
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
