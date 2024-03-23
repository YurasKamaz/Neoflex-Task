import React from "react";
import classes from "./plusMinusButtons.module.css"
import { useCount } from "../../../hooks/useCount";

const PlusMinusButtons = ({headphone}) => {
    const count = useCount(headphone)
    const minusButton = (headphone) => {
        const storedItems = JSON.parse(localStorage.getItem('basket'))
        const indexToDelete = storedItems.findIndex(element => element.id === headphone.id)

        if (indexToDelete !== -1) {
            const newArr = [...storedItems]
            newArr.splice(indexToDelete, 1)
            localStorage.setItem('basket', JSON.stringify(newArr))
        }
    }
    const plusButton = (headphone) => {
        const storedItems = localStorage.getItem('basket')
        let list = storedItems ? JSON.parse(storedItems) : []
        list.push(headphone)
        localStorage.setItem('basket', JSON.stringify(list))
    }

    return (
        <div className={classes.container}>
            <button className={classes.plusMinusButton} onClick={() => plusButton(headphone)}>+</button>
            <p style={{marginLeft: "10px", marginRight: "10px", fontSize: "15px"}}>{count}</p>
            <button className={classes.plusMinusButton} onClick={() => minusButton(headphone)}>-</button>
        </div>
    )
}

export default PlusMinusButtons;