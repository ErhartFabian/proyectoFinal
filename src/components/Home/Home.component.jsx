import axios from "axios";
import React, { useState,useEffect } from "react";
import './home.css';

function Home() {
    
    /* useEffect(() => {
        axios.get(`https://source.unsplash.com/collection/190727/1600x900`)   
        .then(res => {
        console.log(res);
        //
        })
        .catch(err   => {
          console.log(err);
        });
        
      },[]); */

    // go to inventory page
    const goToInventory = () => {
        window.location.href = "/inventory";
    }
    //go to home page
    const goToHome = () => {
        window.location.href = "/home";
    }
        

    return (
        <div className="container is-full">
            <div className="columns">
                <div className="column">
                    <button onClick={goToHome} >Home</button>
                </div>
                <div className="column">
                    <button onClick={goToInventory} >Inventory</button>
                </div> 
            </div>

        

            
        </div>
        
    );
}

export default Home;