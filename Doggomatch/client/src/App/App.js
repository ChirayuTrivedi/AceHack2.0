import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
// import MyBuys from "../Screens/MyBuys/MyBuys";

import Login from "../Component/Login/Login";
import Register from "../Component/Signup/Register";
import Home from "../Component/Home/Home";
import AddDog from "../Component/AddDog/AddDog";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        {/* <Route path="/mybuy" exact element={<Dashboard/>} />
        <Route path="/mysell" exact element={<MySell />} />
        <Route path="/buyinformation" exact element={<BuyInformation />} /> */}
        <Route path="/signup" exact element={<Register />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/adddog" exact element={<AddDog />} />
        {/* <Route path="/bookdetails/:_id" exact element={<BookDetails />} />
        <Route path="/buybookdetails/:_id" exact element={<BuyBookDetail />} />
        <Route path="/cartdetails/:_id" exact element={<CartDetails />} /> */}

        {/* <Route path="/mycart" exact element={<Cart />} /> */}
        
      </Routes>
    </Router>
  );
}

export default App;
