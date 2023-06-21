import React from "react";
import Add from "./Add";
function Home(){
    const shirtprice=135;
    return (<>
    <div className="card  m-5"  style={{width: "18rem;"}}>
  <img src={require('./images/blackmen.jpg')} className="card-img-top w-25 h-25 mx-auto p-2 px-4 " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Men Shirt</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p className="h3">Rs.{shirtprice}</p>
     <Add></Add>
  </div>
</div>
{/*<div className="card  m-5" style={{width: "18rem;"}}>
  <img src={require('./images/womengreen.jpg')} className="card-img-top w-25 h-25 mx-auto p-2  px-4" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Women Dress</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     
    <a href="#" className="btn btn-primary">Check out</a>
  </div>
</div>
<div className="card  m-5" style={{width: "18rem;"}}>
  <img src={require('./images/watch.jpg')} className="card-img-top w-25 h-25 mx-auto p-2  px-4" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Watch</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Check out</a>
  </div>
</div>
<div className="card  m-5" style={{width: "18rem;"}}>
  <img src={require('./images/platinumring.jpg')} className="card-img-top w-25 h-25 mx-auto p-2  px-4" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Platinum Ring</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Check out</a>
  </div>
    </div>*/}
    </>)
}
export default Home;