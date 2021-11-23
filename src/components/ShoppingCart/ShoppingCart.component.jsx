import React, { useState, useEffect, useRef } from "react";
import './ShoppingCart.css';



function ShoppingCart(props) {

    console.log(localStorage.getItem("numberCar"));
    let aux= JSON.parse(localStorage.getItem("itemsCar"));
    console.log(aux);
    let total = 0;
    //sumar todos los precios de los articulos
    for(let i=0; i<aux.length; i++){
        total += aux[i].price;
    }
    window.localStorage.setItem("total", total);

    const goToInventory = () => {
        window.location.href = "/inventory";
    }
    //go to home page
    const goToHome = () => {
        window.location.href = "/home";
    }
    // go to paymentprocess page
    const goToPaymentProcess = () => {
        window.location.href = "/paymentprocess";
    }

    //funcion para limpiar el carrito
    const clearCart = () => {
        props.setCartCount([]);
        window.localStorage.setItem("numberCar", 0);
        window.localStorage.setItem("itemsCar", JSON.stringify([]));
    }

    let newkey = 0;
    //añadir articulo actual al carrito
    const addToCart = (event) => {
        const newproduc = props.products[parseInt(event.target.name)-1];
        newkey = (parseInt(event.target.name)-1)+1;
        var items = [...aux];
        items.push(newproduc);
        props.setCartCount(items);
        window.localStorage.setItem("numberCar", props.cartCount.length+1);
        window.localStorage.setItem("itemsCar", JSON.stringify(items));

    }
    //eliminar articulo actual del carrito
    const removeFromCart = (event) => {
        const newproduc = props.products[parseInt(event.target.name)-1];
        var items = [...aux];
        items.splice(parseInt(event.target.name)-1, 1);
        props.setCartCount(items);
        window.localStorage.setItem("numberCar", props.cartCount.length+1);
        window.localStorage.setItem("itemsCar", JSON.stringify(items));
    }

    return(
        <div className="shoppingCart">
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
            <h1>Shopping Cart</h1>
            <div className="cart">
                <div className="items">
                    {
                        aux.map((item) => {
                            return (
                                <div className="item" key={newkey}>
                                    <div className="item-img">
                                        <img src={item.image} alt="" height="100px"></img>
                                    </div>
                                    <div className="item-info">
                                        <h4>{item.title}</h4>
                                        <h4>&#36;{item.price}</h4>
                                    </div>
                                    <div className="item-add-delete">
                                        <button onClick={addToCart} name={item.id}><b>+</b></button>
                                        <button onClick={removeFromCart}>-</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="total">
                    <p>Total items</p>
                    <h4>{aux.length}</h4>
                    <p>Total payment</p>
                    <h4>&#36;{total}</h4>
                    <div className="checkout">
                        <button onClick={goToPaymentProcess} >Checkout</button>
                        <button onClick={clearCart} >Cancel</button>

                    </div>

                </div>
            </div>
        </div>
    )


}

export default ShoppingCart;