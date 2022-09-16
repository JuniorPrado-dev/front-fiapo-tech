import React from "react";
import * as S from "../../Styled"
import imgCost from "../../images/costureiraSorrindo2.jpg"
import imgCort from "../../images/imgCort.jpg"
import imgInst from "../../images/icons/icon_instagram.png"
import imgWhatsapp from "../../images/icons/icon_whatsapp.png"
import imgMul from "../../images/imgMulherSorrindo.jpg"
import {Link} from "react-router-dom" 
import Form from "./Form";
const Body = () => {
  //  const navigate=useNavigate();
    return (
        <>
            <S.InfoLandP>
                <S.TextLandP>
                    <h1>Quem somos?</h1>
                    <p>Fiapo é uma startup que através de um aplicativo multifuncional disponibilizará para as empresas e microempreendedores do setor têxtil a terceirização de todo o processo de digitalização e corte na fabricação têxtil.
                    </p>
                </S.TextLandP>
                <S.ImgLandP src={imgCost} />
            </S.InfoLandP>
            <S.InfoLandP>
                <S.ImgLandP src={imgCort} />
                <S.TextLandP>
                    <h1>Nossos Serviços!</h1>
                    <p>O cliente não apenas poderá entrar em contato com a startup através do aplicativo, como por meio dele fará o pedido, fornecendo os dados necessários. Por meio desse pedido, realizamos o serviço inerente a todo o processo de corte dos tecidos. 
                    </p>
                </S.TextLandP>
            </S.InfoLandP>
            <S.InfoLandP>
                <S.TextLandP>
                    <h1>Experimente Nossos Serviços!</h1>
                    <p>Se você ainda não é cadastrado, <Link to={"/cadastro"}><span>Cadastre-se agora mesmo!</span></Link> Caso já seja cadastrado, <Link to={"/login"}> <span>faça Login!</span></Link></p>
                </S.TextLandP>
                <S.ImgLandP src={imgMul} />
            </S.InfoLandP>
            <S.InfoLandP>
                <Form/>
            </S.InfoLandP>
            
        </>
    )

}
export default Body;