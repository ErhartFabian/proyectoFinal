import React, { useState } from 'react';
import './inventory.css';
import cart from './cart.png';
import add2Cart from './shopping-cart.png'
import clock from './loadimg.png';
import error from './errorimg.png';
import { Tooltip } from '@mui/material';



function Inventory(props) {

    let items = [...props.cartCount];
    const [art, setArt] = useState(items);

    //funcion para agregar productos al carrito
    const addToCart = (event) => {

        let i = 0;
        console.log(items);
        i++;
        if (items.length === 0) {
            const newproduc = props.products[parseInt(event.target.name) - 1];
            items.push(newproduc);
            props.setCartCount(items);
            window.localStorage.setItem("numberCar", props.cartCount.length + 1);
            window.localStorage.setItem("itemsCar", JSON.stringify(items));

            console.log(items, parseInt(event.target.name) - 1);
            console.log("items qunantity", items[i - 1]);


        }
        //El producto seleccionado se guarda en esta variable

        // //Arreglo con los productos agregados
        // var items = [...props.cartCount];
        //Se le agrega el producto seleccionado
        // items.push(newproduc);
        //El arreglo del carro se actualiza
        // props.setCartCount(items);
        //Guarda en la memoria la cantidad de items en el carro
        // window.localStorage.setItem("numberCar", props.cartCount.length + 1);
        // //Guarda en la memoria los articulos agregados
        // window.localStorage.setItem("itemsCar", JSON.stringify(items));

        else if (items[i] === parseInt(event.target.name)) {

            items[i].quantity += 1;
            props.setCartCount(items);
            window.localStorage.setItem("numberCar", props.cartCount.length + 1);
            window.localStorage.setItem("itemsCar", JSON.stringify(items));
        }
        else {
            const newproduc = props.products[parseInt(event.target.name) - 1];
            items.push(newproduc);
            props.setCartCount(items);
            window.localStorage.setItem("numberCar", props.cartCount.length + 1);
            window.localStorage.setItem("itemsCar", JSON.stringify(items));
        }

    }

    //Manda al usuario al carrito
    const goToCart = () => {
        window.location.href = "/shoppingcart";
    }
    //Manda al usuario a Home
    const goToHome = () => {
        window.location.href = "/home";
    }

    //Si el estado de la pagina está en idle o cargando, manda la pantalla de carga
    if (props.load === 'idle_st' || props.load === 'loading_st') {
        return (
            <div id="loadscreen">
                <img alt="clock" src={clock} id="clock" />
                <p id="loadingtxt">LOADING ARTICLES, PLEASE WAIT...</p>
            </div>
        );
    }

    //Si el estado está en error, manda la pantalla de error
    if (props.load === 'error_st') {
        return (
            <div id="errorscreen">
                <img alt="error" src={error} id="errorimg" />
                <p id="errortxt">HMMM SOMETHING WENT WRONG PLEASE RECHARGE</p>
            </div>
        );
    }

    //Si el estado pasa a completo, imprime los articulos
    if (props.load === 'complete_st') {
        return (
            <div id="articlesdiv">
                <div id="topnav">
                    <h1 id="compName" onClick={goToHome}>Eshop</h1>

                    <Tooltip title={"Go to cart"} arrow>
                        <button id="topcartbtn" onClick={goToCart}>
                            <img id="cartIcon" alt="cartIcon" src={cart}></img>

                        </button>
                    </Tooltip>

                    <h1 id="totalCart">Cart: {localStorage.getItem("numberCar")} </h1>
                </div>

                <ul id="artsUl" style={{
                    display: 'flex',
                    listStyle: 'none',
                    flexWrap: "wrap",
                    justifyContent: 'center'
                }}>


                    {props.products.map((article) => {

                        return (

                            <div className="App" key={article.title}>

                                <div id="artTable" key={article.title}>
                                    <div id="artSquare"
                                        className="artTabs"
                                        type="button"
                                        key={article.title}
                                        name={article.title}
                                        style={{
                                            width: '305px',
                                            height: '490px',
                                            margin: '2px solid black',
                                        }}
                                    >
                                        <img
                                            className="imagesDisplay"
                                            key={article.title}
                                            name={article.title}
                                            alt={article.title}
                                            src={article.image}
                                            style={{
                                                width: '250px',
                                                height: '280px',
                                                marginBottom: '10px',

                                            }}
                                        />


                                        <p id="artName">{article.title}</p>
                                        <p id="artP">{"$" + article.price}</p>
                                        <p id="artR">{"Rate: " + article.rating.rate + " de 5"}</p>
                                        <p id="artQs">{"Available: " + article.rating.count}</p>

                                        <Tooltip title="Add to cart" arrow>
                                            <button id="addbutton" type="button" onClick={addToCart} name={article.id}>
                                                <img alt="addcart"
                                                    id="add2cart"
                                                    src={add2Cart}
                                                    key={article.id}
                                                    name={article.id}>
                                                </img>
                                            </button>
                                        </Tooltip>

                                    </div>

                                </div>
                            </div>
                        )

                    })}
                </ul>


            </div>
        );
    }



}
export default Inventory;