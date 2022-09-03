import React from "react";
import phoneImg from "../phone.jpeg"
import { ITEM } from "../services/constants";

const Home = (props) => {
    const { addToCartHandler } = props;

    const handleClick = () => {
        addToCartHandler(ITEM)
    }
    
    return (
        <>
            <h1>Home Component</h1>
            <div className="cart">
                <div><img src={phoneImg} alt="Phone" width={200} height={200} /></div>
                <div>
                    <span>{ITEM.name} - Rs. {ITEM.price}/-</span>
                </div>
                <div><button onClick={handleClick}>Add to cart</button></div>
            </div>
        </>

    )
}
export default Home