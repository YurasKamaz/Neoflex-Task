import React from "react";
import classes from "./navbar.module.css";
import BasketButton from "../bracketButton/basketButton";
import { useNavigate } from "react-router-dom";
import { CATALOG_ROUTE } from "../../../utils/consts";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className={classes.navbar}>
            <button className={classes.homeButton} onClick={() => {navigate(CATALOG_ROUTE)}}>QPICK</button>
            <BasketButton/>
        </div>
    )
}

export default Navbar;