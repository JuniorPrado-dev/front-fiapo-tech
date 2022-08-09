import * as R from "react";
import { Routes, Route, useParams, useLocation } from 'react-router-dom';

import icon_H from "../images/icons/icon_home.png"
import { Link } from "react-router-dom";
const LoginPage=(props)=>{
    
    const {state:{nome,id}}=useLocation();
    console.log(nome);
    // let {info}=useParams();
    return(
        <>
            <h1>Login Page {nome} {id}</h1>
            <Link to={"/"}><img src={icon_H}/></Link>
        </>
    )
}
export default LoginPage;