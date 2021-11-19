import axios from "axios";
import React, { useState,useEffect } from "react";
import './home.css';

function Home() {
    
    /* d */

    // go to inventory page
    const goToInventory = () => {
        window.location.href = "/inventory";
    }
    //go to home page
    const goToHome = () => {
        window.location.href = "/home";
    }
        

    return (
        <div className="columns">
            <button className="column" onClick={goToHome}>
                Home
            </button>
            <button className="column" onClick={goToInventory} >
                Inventory
            </button> 

        

            
        </div>
        
    );
}

export default Home;