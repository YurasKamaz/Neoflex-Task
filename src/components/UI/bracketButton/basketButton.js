import React, { useEffect, useState } from "react";
import classes from "./basketButton.module.css";
import bracket from "../../../assets/bracket.png";
import { useNavigate } from "react-router-dom";
import { BASKET_ROUTE } from "../../../utils/consts";

const BasketButton = () => {
    const navigate = useNavigate();
    const [count, setCount] = useState(Object.keys(localStorage).length);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const storedItems = localStorage.getItem('basket')
            const newCount = storedItems ? JSON.parse(storedItems).length : 0
            if (newCount !== count) {
                setCount(newCount)
            }
        }, 100)
        localStorage.setItem("counter", count)
        return () => clearInterval(intervalId)
    }, [count]);
    
    return (
        <div className={classes.basketIcon}>
            <img src={bracket} className={classes.basketButton} onClick={() => {navigate(BASKET_ROUTE)}}/>
            <p className={classes.counter}>{count}</p>
        </div>
    )
}

export default BasketButton;