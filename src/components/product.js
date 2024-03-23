import React from "react";
import star from "../assets/star.png"
import BuyButton from "./UI/buyButton/buyButton";

const Product = ({headphone}) => {
    return (
        <div class="item">
            <div class="headphone-img-container">
                <img class="headphone-img" src={headphone.img}/>
            </div>
            <div class="item-middle">
                <p style={{marginLeft: "10px"}}>{headphone.title}</p>
                <p style={{color: "#F9A602", marginRight: "10px"}}>{`${headphone.price} ₽`}</p>
            </div>
            <div class="item-foot">
                <div class="rate">
                    <img src={star} class="star"/>
                    <p style={{margin: "5px", color: "lightgrey", fontSize: "25px"}}>{headphone.rate}</p>
                </div>
                <BuyButton headphone={headphone}/>
            </div>
        </div>
    );
}
  
export default Product;