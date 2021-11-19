import React, { useState, useEffect } from 'react';
import './inventory.css';
import cart from './cart.png';
import add2Cart from './shopping-cart.png'
import clock from './loadimg.png';
import error from './errorimg.png';
import { Tooltip } from '@mui/material';
import axios from 'axios';


function Inventory() {

    //Estado que contiene un arreglo con los nombres de los articulos 
    const [artTitle, setArtTitle] = useState([]);
    //Estado que contiene un arreglo con las urls (de imagenes) de los articulos 
    const [artImg, setArtImg] = useState([]);
    //Estado que contiene un arreglo con los precios de los articulos 
    const [artPrice, setArtPrice] = useState([]);
    //Estado que contiene la descripción de los articulos
    const [artDesc, setArtDesc] = useState([]);
    //Estado que contiene la calificación de los articulos
    const [artRate, setArtRate] = useState([]);
    //Estado que contiene la cantidad de los articulos
    const [artQ, setArtQ] = useState([]);
    //Estado que contiene el estado de la pagina
    const [load, setLoad] = useState('idle_st');

    //función para generar la tabla con los articulos
    function getArticles() {

        //Solicita 12 articulos a través de la API

        axios.get('https://fakestoreapi.com/products?limit=12').then(response => {

            console.log(response);
            //El estado de la pagina pasa a cargando
            setLoad('loading_st');

            //Arreglo auxiliar para guardar los nombres de los articulos
            let newArtsT = [];
            //Arreglo auxiliar para guardar las imagenes de los articulos
            let newImgs = [];
            //Arreglo auxiliar para guardar los precios de los articulos
            let newPrices = [];
            //Arreglo auxiliar para guardar las descripciones de los articulos
            let newDescs = [];
            //Arreglo auxiliar para guardar las calificaciones de los articulos
            let newRates = [];
            //Arreglo auxiliar para guardar las cantidades de los articulos
            let newQtys = [];


            //Ciclo para guardar los datos en cada arreglo
            for (let i = 0; i < 12; i++) {

                newArtsT.push(response.data[i].title);
                newImgs.push(response.data[i].image);
                newPrices.push(response.data[i].price);
                newDescs.push(response.data[i].description);
                newRates.push(response.data[i].rating.rate);
                newQtys.push(response.data[i].rating.count);

            }

            //El estado de la carga pasa a completado
            setLoad('complete_st');
            //Pasa los datos a los estados de los arreglos
            setArtTitle(newArtsT);
            setArtImg(newImgs);
            setArtPrice(newPrices);
            setArtDesc(newDescs);
            setArtRate(newRates);
            setArtQ(newQtys);

        }

        ).catch(() => {

            alert("Algo salió mal :(");
            //El estado de la pagina pasa a error
            setLoad('error_st');
        })
    }

    //Se llamarán los articulos cada que se reinicie la pagina
    useEffect(() => {
        getArticles();
    }, []);

    if (load === 'idle_st' || load === 'loading_st') {
        //Si el estado de la pagina está en idle o cargando, manda la pantalla de carga
        return (
            <div id="loadscreen">
                <img alt="clock" src={clock} id="clock" />
                <p id="loadingtxt">LOADING ARTICLES, PLEASE WAIT...</p>
            </div>
        );
    }

    if (load === 'error_st') {
        //Si el estado está en error, manda la pantalla de error
        return (
            <div id="errorscreen">
                <img alt="error" src={error} id="errorimg" />
                <p id="errortxt">HMMM SOMETHING WENT WRONG :( PLEASE RECHARGE</p>
            </div>
        );
    }

    if (load === 'complete_st') {
        //Si el estado pasa a completo, imprime los articulos
        return (
            <div id="articlesdiv">
                <div id="topnav">
                    <h1 id="compName">Eshop</h1>
                    <img id="cartIcon" alt="cartIcon" src={cart}></img>

                </div>

                <ul id="artsUl" style={{ display: 'flex', listStyle: 'none', flexWrap: "wrap", justifyContent: 'center' }}>


                    {artTitle.map((article, articleImg) => {
                        const images = artImg[articleImg];

                        return (

                            <div className="App" key={article}>

                                <div id="artTable" key={article}>
                                    <div id="artSquare"
                                        className="artTabs"
                                        type="button"
                                        key={article}
                                        name={article}
                                        style={{
                                            width: '305px',
                                            height: '490px',
                                            margin: '2px solid black',

                                        }}
                                    >
                                        <img
                                            className="imagesDisplay"
                                            key={articleImg}
                                            name={article}
                                            alt={article}
                                            src={images}
                                            style={{
                                                width: '250px',
                                                height: '280px',
                                                marginBottom: '10px',

                                            }}
                                        />


                                        <p id="artName">{article}</p>
                                        <p id="artP">{"$" + artPrice[articleImg]}</p>
                                        <p id="artR">{"Valoración: " + artRate[articleImg] + " de 5"}</p>
                                        <p id="artQs">{"Disponibles: " + artQ[articleImg]}</p>

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