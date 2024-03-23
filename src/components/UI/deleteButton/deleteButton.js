import React, { useEffect, useState } from "react";
import trash from "../../../assets/free-icon-garbage-158725.png";
import classes from "./deleteButton.module.css";

const DeleteButton = ({headphone}) => {
    const deleteItem = (headphone) => {
        const storedItems = JSON.parse(localStorage.getItem('basket'))
        const newItems = storedItems.filter((h, _) => h.id != headphone.id)
        localStorage.setItem('basket', JSON.stringify(newItems))
    }

    return (
        <img src={trash} className={classes.deleteButton} onClick={() => {deleteItem(headphone)}}/>
    )
}

export default DeleteButton;