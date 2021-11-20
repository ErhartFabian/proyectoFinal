import React from 'react';
import './inventory.css';
import cart from './cart.png';
import add2Cart from './shopping-cart.png'
import clock from './loadimg.png';
import error from './errorimg.png';
import { Tooltip } from '@mui/material';
import axios from 'axios';


function Inventory(props) {

    

    if (props.load === 'idle_st' || props.load === 'loading_st') {
        //Si el estado de la pagina está en idle o cargando, manda la pantalla de carga
        return (
            <div id="loadscreen">
                <img alt="clock" src={clock} id="clock" />
                <p id="loadingtxt">LOADING ARTICLES, PLEASE WAIT...</p>
            </div>
        );
    }

    if (props.load === 'error_st') {
        //Si el estado está en error, manda la pantalla de error
        return (
            <div id="errorscreen">
                <img alt="error" src={error} id="errorimg" />
                <p id="errortxt">HMMM SOMETHING WENT WRONG :( PLEASE RECHARGE</p>
            </div>
        );
    }

    if (props.load === 'complete_st') {
        //Si el estado pasa a completo, imprime los articulos
        return (
            <div id="articlesdiv">
                <div id="topnav">
                    <h1 id="compName" onClick={() => {
                        props.history.goBack();
                    }}>Eshop</h1>

                    <Tooltip title={"Ir al carrito"} arrow>
                        <button id="topcartbtn">
                            <img id="cartIcon" alt="cartIcon" src={cart}></img>
                        </button>
                    </Tooltip>
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


                                        <p id="artName">{article}</p>
                                        <p id="artP">{"$" + article.price}</p>
                                        <p id="artR">{"Valoración: " + article.rating.rate + " de 5"}</p>
                                        <p id="artQs">{"Disponibles: " + article.rating.count}</p>

                                        <Tooltip title="Agregar al carrito" arrow>
                                            <button id="addbutton" type="button">
                                                <img alt="addcart" id="add2cart" src={add2Cart}></img>
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