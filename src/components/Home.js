import React from "react";
import phoneImg from "../phone.jpeg"
import { ITEM } from "../services/constants";

const Home = (props) =>{
    const {addToCartHandler, data} = props;
console.log(data,"<home data>");
    const handleClick = ()=>{
        addToCartHandler(ITEM)
    }
    return(
        <>
        <h1>Home Component</h1>
        <div>Added count: {data.length}</div>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", height: "300px"}}>
            <div><img src={phoneImg} alt="Phone" width={200} height={200}/></div>
            <div>
                <span>{ITEM.name} - Rs. {ITEM.price}/-</span>
            </div>
            <div><button onClick={handleClick}>Add to cart</button></div>
        </div>
        </>

    )
}
export default Home