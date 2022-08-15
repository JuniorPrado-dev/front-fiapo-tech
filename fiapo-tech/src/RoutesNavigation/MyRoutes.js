import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import HomePage from "../componentsPages/HomePage";
import LoginPage from "../componentsPages/LoginPage";

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default MyRoutes;