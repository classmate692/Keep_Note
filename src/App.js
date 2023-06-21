import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import React from "react";
import Add_card_hide from "./components/Add_card_hide";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>       
            <Route  element={<Header />}>
              <Route index element={<Home/>}/>
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
