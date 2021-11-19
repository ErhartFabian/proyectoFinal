import React,{useState,useEffect} from "react";
import { Carousel } from "react-responsive-carousel";
import './home.css';


export default (props) => (
  <Carousel autoPlay>
      {
         props.products.map((product) => {
            return (
                <div className="carousel" >
                <img alt="" src={product.image} key={product.title} />
                <p className="legend">{product.title} <br></br> &#36;{product.price}</p>
                </div>
            )})
        
      }
  </Carousel>
);
