import styled from "styled-components"
export const BLogin=styled.button`
    padding:0.5%  3%; 
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    font-size: larger;
    color: black;
    border: 1px solid black ;
    border-radius: 0.8vw;
    box-shadow:1px 1px 1px ;
    background: lightblue;
    margin-right: 2vw;
    :hover{
        background-color: lightcyan;
    }
`
export const HomeHeader=styled.header`
    width: 100%;
    height: 5vw;
    background-color: darkviolet;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        margin-left: 2vw;
        height: 60%;
    }
`