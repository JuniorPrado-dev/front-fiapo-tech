import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import HomePage from "../componentsPages/HomePage";
import LoginPage from "../componentsPages/LoginPage";
import ResistrationPage from "../componentsPages/registrationPage";

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/cadastro" element={<ResistrationPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default MyRoutes;