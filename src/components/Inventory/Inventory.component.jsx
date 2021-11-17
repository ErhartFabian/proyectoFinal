import React, { useState, useEffect } from "react";
import "./inventory.css";
import cart from "./cart.png";
import axios from 'axios';

function Inventory() {

    //Estado que contiene un arreglo con los nombres de los articulos 
    const [artTitle, setArtTitle] = useState([]);
    //Estado que contiene un arreglo con las urls (de imagenes) de los articulos 
    const [artImg, setArtImg] = useState([]);
    //Estado que contiene un arreglo con los precios de los articulos 
    const [artPrice, setArtPrice] = useState([]);

    //función para generar la tabla con los articulos
    function getArticles() {

        //Solicita 12 articulos a través de la API
        axios.get('https://fakestoreapi.com/products?limit=12').then(response => {

            //Arreglo auxiliar para guardar los nombres de los articulos
            let newArtsT = [];

            //Arreglo auxiliar para guardar las imagenes de los articulos
            let newImgs = [];

            //Arreglo auxiliar para guardar los precios de los articulos
            let newPrices = [];

            //Ciclo para guardar los datos en cada arreglo
            for (let i = 0; i < 12; i++) {

                newArtsT.push(response.data[i].title);
                newImgs.push(response.data[i].image);
                newPrices.push(response.data[i].price);

            }
            //Pasa los datos a los estados de los arreglos
            setArtTitle(newArtsT);
            setArtImg(newImgs);
            setArtPrice(newPrices);

        }

        ).catch(() => {
            alert("Algo salió mal :(");
        })
    }

    //Se llamarán los articulos cada que se reinicie la pagina
    useEffect(() => {
        getArticles();
    }, []);

    return (
        <div>
            <div id="topnav">
                <h1 id="compName">Eshop</h1>

                <div id="searchbar">
                    <input type="text" placeholder="Search..." />
                    <button type="submit">Search</button>
                </div>

                <img id="cartIcon" alt="cartIcon" src={cart}></img>

            </div>

            <ul style={{ display: 'flex', listStyle: 'none', flexWrap: "wrap" }}>
                

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
                                        width: '400px',
                                        height: '500px',
                                    }}>

                                    <img
                                        className="imagesDisplay"
                                        key={articleImg}
                                        name={article}
                                        alt={article}
                                        src={images}
                                        style={{
                                            width: '150px',
                                            height: '150px',
                                        }}
                                    />
                                    <p>{article}</p>
                                    <p>{"$" +artPrice[articleImg]}</p>
                
                                </button>

                            </div>
                        </div>
                    )

                })}
            </ul>


        </div>
    );
}
export default Inventory;