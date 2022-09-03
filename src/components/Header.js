import React from "react";

const Header = (props) =>{
    const {data} = props;
    console.log(data,"header");
    return(
        <>
            <div>Added item count: <b>{data?.length}</b></div>
        </>

    )
}
export default Header