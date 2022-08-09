import React from "react";
import {Link, Navigate} from "react-router-dom";
const HomePage = () => {
    
    return (
        <>
            <h1>Home page</h1>
            
            <Link to="/login" state={{id:1,nome:"oioioioi"}} >Login</Link> 
        </>
    )
}
export default HomePage;