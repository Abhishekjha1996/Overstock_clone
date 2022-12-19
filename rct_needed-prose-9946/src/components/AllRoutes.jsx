import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage";
import SignUp from "./Signup";


const AllRoutes = () => {
    
    return (
        <Routes>

            <Route path="/" element= {<Home />} /> 
            <Route path="/login" element= {<Login />} /> 
            <Route path="/signup" element= {<SignUp />} />
            <Route path="/cartpage" element= {<CartPage />} /> 
            <Route path="/registerpage" element= {<RegisterPage />} />

        </Routes>
    )
}

export default AllRoutes