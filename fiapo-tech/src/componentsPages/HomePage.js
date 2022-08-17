import React from "react";
import {Link, Navigate} from "react-router-dom";
import Body from "../components/PageHome/Body";
import Footer from "../components/PageHome/Footer";
import Header from "../components/PageHome/Header";
const HomePage = () => {
    
    return (
        <>
            <Header/>
            <Body/>
            <Footer></Footer>
        </>
    )
}
export default HomePage;