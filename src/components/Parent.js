import React, { useState } from "react";
import Cart from "./Cart";
import Add from "./Add";
function Parent() {
  const shirtprice = 135;
  const [count, setCount] = useState(1);
  const [list,setList]=useState([]);
  function remove() {
    setCount(0);
    props.status[1](true);
  }
  function reduce() {
    if (count != 0) {
      setCount(count - 1);
    }
  }
  function add() {
    setCount(count + 1);
  }
  return (
    <>
      <div className="card  m-5" style={{ width: "18rem;" }}>
        <img
          src={require("./images/blackmen.jpg")}
          className="card-img-top w-25 h-25 mx-auto p-2 px-4 "
          alt="..."
        />
        
      </div>
      <div>
        <button onClick={remove}>Remove item</button>
        <div>
          <button onClick={reduce}>-</button>
          <button>{count}</button>
          <button onClick={add}>+</button>
        </div>
      </div>
    {list!=[] && list.map(shirtprice,count)}
    {
       <div className="card-body">
       <h5 className="card-title">Men Shirt</h5>
       <p className="card-text">
         Some quick example text to build on the card title and make up the
         bulk of the card's content.
       </p>
       <p className="h3">Rs.{shirtprice}</p>
       <Add></Add>
     </div>
    }
     <Cart buyingstatus={[list,setList]}></Cart>
    </>
  );
}
