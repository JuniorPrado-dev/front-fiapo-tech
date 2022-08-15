import React from "react";
import * as S from "../../Styled"
import * as N from "../../RoutesNavigation/Coodenator"
import logo from "../../images/logoFiapoW.png"
import { useNavigate } from "react-router-dom";

const Header=()=>{
    const navigate=useNavigate() 
    return (
        <S.HomeHeader>
            <img src={logo} alt="logo da Fiapo Tech"/>
            <S.BLogin onClick={()=>{N.goToLogin(navigate)}}>Login</S.BLogin>
        </S.HomeHeader>
    )
}
export default Header;