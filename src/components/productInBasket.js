import React from "react";
import PlusMinusButtons from "./UI/plusMinusButtons/plusMinusButtons";
import DeleteButton from "./UI/deleteButton/deleteButton";
import { useCount } from "../hooks/useCount";

const ProductInBasket = ({headphone}) => {
    const count = useCount(headphone)

    return(
        <div class="item-basket">
            <div>
                <div class="basket-item-header">
                    <img class="basket-item-img" src={headphone.img}/>
                    <div class="basket-title-price">
                        <p style={{fontSize: "20px"}}>{headphone.title}</p>
                        <p style={{color: "grey", marginRight: "10px", fontSize: "20px"}}>{`${headphone.price} ₽`}</p>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "flex-end", marginRight: "15px"}}>
                        <DeleteButton headphone={headphone}/>
                </div>
                <div class="basket-item-footer">
                    <PlusMinusButtons headphone={headphone}/>
                    <p style={{fontSize: "20px", marginRight: "15px", marginBottom: "15px", marginTop: "5px"}}>{`${headphone.price*count} ₽`}</p>
                </div>
            </div>
        </div>
    )
} 

export default ProductInBasket;