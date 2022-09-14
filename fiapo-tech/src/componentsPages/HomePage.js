import React from "react";
import Body from "../components/PageHome/Body";
import Footer from "../components/PageHome/Footer";
import Header from "../components/PageHome/Header";
import { HomeP } from "../Styled";
const HomePage = () => {
    
    return (
        <HomeP>
            <Header/>
            <Body/>
            <Footer/>
        </HomeP>
    )
}
export default HomePage;