import React, { useState, useEffect } from "react";
import "./inventory.css";
import cart from "./cart.png";
import axios from 'axios';

function Inventory() {

    const [artTitle, setArtTitle] = useState([]);
    const [artImg, setArtImg]= useState([]);

    function getArticles() {

        axios.get('https://fakestoreapi.com/products?limit=12').then(response => {
            console.log(response);
            let newArtsT = [];
            let newImgs=[];

            for (let i = 0; i < 12; i++) {
                newArtsT.push(response.data[i].title);
                newImgs.push(response.data[i].image);
            }
            setArtTitle(newArtsT);
            setArtImg(newImgs);
            console.log(newArtsT);
            console.log(newImgs);
        }

        ).catch(() => {
            alert("Algo salió mal :(");
        })
    }

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

            <ul style={{ display: 'flex', listStyle: 'none', flexWrap: "wrap"}}>

                {artTitle.map((article, articleImg) => {
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
                                        height: '100px',
                                    }}>
                                    {articleImg}
                                    
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