import React, { useState, useEffect, useRef } from "react";
import './ShoppingCart.css';



function ShoppingCart(props) {

    console.log(localStorage.getItem("numberCar"));
    let aux= JSON.parse(localStorage.getItem("itemsCar"));
    console.log(aux);

    for(let i=0; i<aux.length; i++){
        console.log(aux[i].title);
    }

    return(
        <div className="shoppingCart">
        </div>
    )


}

export default ShoppingCart;