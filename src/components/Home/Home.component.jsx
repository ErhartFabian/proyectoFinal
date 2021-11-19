import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import './home.css';

function Home() {

    //arreglo que contiene arreglos con los nombres de los articulos
    const [products, setProducts] = useState([]);
    const [state, setState] = useState('IDLE');

    useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=3')
    .then(response => {
        setState('LOADING');
        var newproducts = [];
        for (let i = 0; i < response.data.length; i++) {
            newproducts.push(response.data[i]);
        }
        setProducts(newproducts);
        setState('COMPLETE');
    })
    .catch(error => {
        console.log(error);
    });

    }, []);
    
    console.log(products);

    // go to inventory page
    const goToInventory = () => {
        window.location.href = "/inventory";
    }
    //go to home page
    const goToHome = () => {
        window.location.href = "/home";
    }



    


    return (
        <div>
            <div className="columns">
                <div className="columns_left">
                    <h1>Epshop</h1>
                </div>

                <div className="columns_right">
                    <button className="column" onClick={goToHome}>
                        Home
                    </button>
                    <button className="column" onClick={goToInventory} >
                        Inventory
                    </button>
                    <button className="column" onClick={goToInventory} >
                        About us
                    </button>

                </div>
            </div>

            <div className="body">

                <div className="carousel_products">
                    <h2>Products</h2>

                    <div className="slideshow-container">
                        {
                            products.map((product) => {
                                return (
                                    <div className="mySlides fade" key={product.id} >
                                        <div className="numbertext">1 / 3</div>
                                        <img src={product.image} style={{width:"100px"}} key={product.id}>
                                        </img>
                                        <div className="text">{product.title}</div>
                                    </div>
                                    
                                )
                            })
                        }
                         

                    </div>
                    

                </div>

                <div className="aboutUs">

                    <h2>About Us !</h2>
                    <h3 style={{ textAlign: "center" }}>Welcome To <span id="W_Name1">Epshop</span></h3>
                    <p><span id="W_Name2">Epshop</span> is a Professional <span id="W_Type1">eCommerce</span> Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of <span id="W_Type2">eCommerce</span>, with a focus on dependability and <span id="W_Spec">sell online </span>. We're working to turn our passion for <span id="W_Type3">eCommerce</span> into a booming <a href="https://www.blogearns.com" rel="do-follow" style={{ color: "inherit", textDecoration: "none" }}>online website</a>. We hope you enjoy our <span id="W_Type4">eCommerce</span> as much as we enjoy offering them to you.</p>
                    <p>I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
                    <p style={{ fontWeight: "bold", textAlign: "center" }}>Thanks For Visiting Our Site<br></br>
                        <span style={{ color: "blue", fontSize: "16px", fontWeight: "bold", textAlign: "center" }}>Have a nice day !</span></p>


                </div>
            </div>


        </div>

    );
}

export default Home;