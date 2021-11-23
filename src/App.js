import './App.css';
import React, { Fragment, useState, useEffect } from 'react';
import { Home, Inventory, PaymentProcess, ShoppingCart } from './components'
import axios from 'axios';
import {
  BrowserRouter as
    Router,
  Route,
  Switch,
} from "react-router-dom";


function App() {

  //Estado de los productos
  const [products, setProducts] = useState([]);
  //Estado de la carga de la página
  const [load, setLoad] = useState('idle_st');
  //Estado de los items en el carro
  const [cartCount, setCartCount] = useState([]);

  //Función para llamar a la API
  useEffect(() => {
    //La API regresa 12 items
    axios.get('https://fakestoreapi.com/products?limit=12')
      .then(response => {
        //Pasa el estado de la carga a cargando
        setLoad('loading_st');
        //Arreglo auxiliar para guardar los productos
        var newproducts = [];
        //Mete los productos de la API al arreglo
        for (let i = 0; i < response.data.length; i++) {
          newproducts.push(response.data[i]);
        }

        for(let i=1; i<newproducts.length; i++){
          
          newproducts[i].quantity=1;
          console.log("Cantidad:", newproducts[i].quantity);
        }
        //Asigna los productos al estado
        setProducts(newproducts);
        //La carga pasa a COMPLETE
        setLoad('complete_st');
      })
      .catch(error => {
        //Si hay error muestra la alerta
        alert("THERE WAS AN ERROR FROM OUR SIDE :( PLEASE TRY AGAIN ")
        console.log(error);
      });

  }, []);



  return (
    <Fragment>

      <Router>
        <Switch>
          {/* ruta a home */}
          <Route path="/home">
            <Home products={products} />
          </Route>
          {/* ruta a  Inventory*/}
          <Route path="/inventory">
            <Inventory products={products} load={load} cartCount={cartCount} setCartCount={setCartCount} />
          </Route>
          {/* ruta para paymenprocess */}
          <Route path="/paymentprocess" component={PaymentProcess} />
          {/* Ruta para el carrito */}
          <Route path="/shoppingcart">
            <ShoppingCart products={products} cartCount={cartCount} setCartCount={setCartCount} />
          </Route>

          <Route path="/" exact component={Home}></Route>

          {/* En caso de no encontrar la pagina solicitada */}
          <Route path="/" render={() => {
            return (
              <div className="component"
                style={{
                  fontSize: "100px",
                  display: 'flex',
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#ffbc01",
                  width: "100vw",
                  height: "100vh"
                }} >
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
