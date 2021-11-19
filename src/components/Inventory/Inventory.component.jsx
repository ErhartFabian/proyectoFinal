import React, { useState, useEffect } from 'react';
import './inventory.css';
import cart from './cart.png';
import clock from './loadimg.png';
import error from './errorimg.png'
import axios from 'axios';


function Inventory() {

    //Estado que contiene un arreglo con los nombres de los articulos 
    const [artTitle, setArtTitle] = useState([]);
    //Estado que contiene un arreglo con las urls (de imagenes) de los articulos 
    const [artImg, setArtImg] = useState([]);
    //Estado que contiene un arreglo con los precios de los articulos 
    const [artPrice, setArtPrice] = useState([]);
    
    const [artDesc, setArtDesc] = useState([]);
    const [artRate, setArtRate] = useState([]);
    const [artQ, setArtQ]= useState([]);



    const [load, setLoad] = useState('idle_st');

    //función para generar la tabla con los articulos
    function getArticles() {

        //Solicita 12 articulos a través de la API

        axios.get('https://fakestoreapi.com/products?limit=12').then(response => {

            console.log(response);
            setLoad('loading_st');

            //Arreglo auxiliar para guardar los nombres de los articulos
            let newArtsT = [];

            //Arreglo auxiliar para guardar las imagenes de los articulos
            let newImgs = [];

            //Arreglo auxiliar para guardar los precios de los articulos
            let newPrices = [];

            let newDescs=[];
            let newRates=[];
            let newQtys=[];


            //Ciclo para guardar los datos en cada arreglo
            for (let i = 0; i < 12; i++) {

                newArtsT.push(response.data[i].title);
                newImgs.push(response.data[i].image);
                newPrices.push(response.data[i].price);
                newDescs.push(response.data[i].description);
                newRates.push(response.data[i].rating.rate);
                newQtys.push(response.data[i].rating.count);


            }

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
            setLoad('error_st');
        })
    }

    //Se llamarán los articulos cada que se reinicie la pagina
    useEffect(() => {
        getArticles();
    }, []);

    if (load === 'idle_st' || load === 'loading_st') {
        return (
            <div id="loadscreen">
                <img alt="clock" src={clock} id="clock"/>
                <p id="loadingtxt">LOADING ARTICLES, PLEASE WAIT...</p>
            </div>
        );
    }

    if (load === 'error_st') {
        return (
            <div id="errorscreen">
                <img alt="error" src={error} id="errorimg"/>
                <p id="errortxt">HMMM SOMETHING WENT WRONG :( PLEASE RECHARGE</p>
            </div>
        );
    }

    if (load === 'complete_st') {
        return (
            <div id="articlsdiv">
                <div id="topnav">
                    <h1 id="compName">Eshop</h1>

                    <div id="searchbar">
                        <input type="text" placeholder="Search..." />
                        <button type="submit">Search</button>
                    </div>

                    <img id="cartIcon" alt="cartIcon" src={cart}></img>

                </div>

                <ul id= "artsUl" style={{ display: 'flex', listStyle: 'none', flexWrap: "wrap", justifyContent:'center'}}>


                    {artTitle.map((article, articleImg) => {
                        const images = artImg[articleImg];

                        return (

                            <div className="App" key={article}>

                                <div id="artTable" key={article}>
                                    <button
                                        className="artTabs"
                                        type="button"
                                        key={article}
                                        name={article}
                                        style={{
                                            width: '300px',
                                            height: '400px',
                                            margin: '2px solid black',
                                            color:'white'
                                        }}>

                                        <img
                                            className="imagesDisplay"
                                            key={articleImg}
                                            name={article}
                                            alt={article}
                                            src={images}
                                            style={{
                                                width: '100%',
                                                height: '250px',
                                            }}
                                        />
                                        <p id="artName">{article}</p>
                                        <p id="artP">{"$" + artPrice[articleImg]}</p>
                                        <p id="artR">{"Valoración: "+artRate[articleImg]}</p>
                                        <p id="artQs">{"Disponibles: "+ artQ[articleImg]}</p>

                                    </button>
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