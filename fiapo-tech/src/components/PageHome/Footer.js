import React from "react";
import * as S from "../../Styled"
import * as N from "../../RoutesNavigation/Coodenator"
import logo from "../../images/logoFiapoW.png"
import { useNavigate } from "react-router-dom";

const Footer=()=>{
    const navigate=useNavigate() 
    return (
        <S.HomeFooter>
            <img src={logo} alt="logo da Fiapo Tech"/>
        </S.HomeFooter>
    )
}
export default Footer;