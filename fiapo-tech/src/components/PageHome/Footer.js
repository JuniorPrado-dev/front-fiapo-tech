import React from "react";
import * as S from "../../Styled"
import * as N from "../../RoutesNavigation/Coodenator"
import logo from "../../images/logoFiapoW.png"
import { useNavigate } from "react-router-dom";
import iconWhats from "../../images/icons/icon_whatsapp.png"
import iconInsta from "../../images/icons/icon_instagram.png"


const Footer=()=>{
    return (
        <S.HomeFooter>
           <S.CardContact>
                <img src={iconWhats} alt="imagem Whapsapp"></img>
                <p>(88) 9.9917-5961 |(88) 9.9359-1208 | (88) 9.9658-5909 </p>
            
            <img src={iconInsta} alt="imagen instagran"></img>
                    <a href="https://instagram.com/fiapotech?igshid=YmMyMTA2M2Y="><p>@fiapotech</p></a>
            </S.CardContact>
            {/* <img src={logo} alt="logo da Fiapo Tech"/> */}
        </S.HomeFooter>
    )
}
export default Footer;