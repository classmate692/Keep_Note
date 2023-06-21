import React from "react";
function Cart(props){
    return (<>
     <div className="card  m-5"  style={{width: "18rem;"}}>
  <img src={require('./images/blackmen.jpg')} className="card-img-top w-25 h-25 mx-auto p-2 px-4 " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Men Shirt</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div><p>Total item:{props.buyingstatus.setList[0].count}</p></div>
</div>
    </>)
}
export default Cart;