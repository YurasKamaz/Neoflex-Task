import React from "react";
import classes from "./buyButton.module.css"

const BuyButton = ({headphone}) => {
    const buy = (headphone) => {
        const storedItems = localStorage.getItem('basket')
        let list = storedItems ? JSON.parse(storedItems) : []
        list.push(headphone)
        localStorage.setItem('basket', JSON.stringify(list))
    }
    
    return (
        <button className={classes.buyButton} onClick={() => {buy(headphone)}}>Купить</button>
    )
}

export default BuyButton;