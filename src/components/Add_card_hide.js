import React from "react";
import { useState } from "react";
function Add_card_hide(props){
    const [count,setCount]=useState(1)
     function remove(){
        setCount(0);
        props.status[1](true);
     }
     function reduce(){
        if(count!=0){
        setCount(count-1);
    }
     }
     function add()
     {
        setCount(count+1);
     }
    return(
        <>
        <button onClick={remove}>Remove item</button>
        <div>
            <button onClick={reduce}>-</button>
            <button>{count}</button>
            <button onClick={add}>+</button>
        </div>
        </>
    )
}export default Add_card_hide;