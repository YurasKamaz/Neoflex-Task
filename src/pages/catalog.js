import React from "react";
import Product from "../components/product";
import { headphones } from "../utils/consts";

const Catalog = () => {
    return (
        <div class="headphones-list">
            {headphones.map(headphone => 
                <Product key={headphone.id} headphone={headphone} />
            )}
        </div>
    );
}
  
export default Catalog;