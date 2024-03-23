import React, { useEffect, useState } from "react";
import ProductInBasket from "../components/productInBasket";

const Basket = () => {
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const storedItems = JSON.parse(localStorage.getItem('basket'))
            let totalPrice = 0
            storedItems.forEach(headphone => {
                totalPrice += headphone.price
            });
            setTotalPrice(totalPrice)
        }, 100)
        
        return () => clearInterval(intervalId)
    }, [totalPrice])

    return (
        <div>
            {JSON.parse(localStorage.getItem('basket')).length === 0 ?
                <p style={{display: "flex", justifyContent:"center", fontSize: "35px"}}>Корзина пуста</p>
                :
                <div class="basket">
                    <div class="basket-list">
                        {JSON.parse(localStorage.getItem('basket'))
                        .reduce((uniqueItems, currentItem) => {
                            if (!uniqueItems.some(item => item.id === currentItem.id)) {
                                uniqueItems.push(currentItem);
                            }
                            return uniqueItems;
                        }, [])
                        .map(headphone => 
                            <ProductInBasket headphone={headphone}/>
                        )}
                    </div>
                    <div class="total-price">
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                            <p>{`ИТОГО`}</p>
                            <p>{`₽ ${totalPrice}`}</p>
                        </div>
                        <button class="order-button">Оформить заказ</button>
                    </div>
                </div>
            }  
        </div>
    );
}
  
export default Basket;
