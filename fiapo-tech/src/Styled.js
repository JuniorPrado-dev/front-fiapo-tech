import styled from "styled-components"

export const HomeHeader = styled.header`
    position: sticky;
    top: 0;
    width: 100%;
    height: auto;
    background-color: darkviolet;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        margin: 1vw 0 1vw 2vw;
        width: 15%;
    }
    `
export const BLogin = styled.button`
        padding:0.5vw  3vw; 
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        font-weight: bold;
        font-size: 2vw;
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
export const InfoLandP = styled.section`
    border-top:0.3vw solid darkorange ;
    display: flex;
    align-items: center;
    justify-content: stretch;
`

export const TextLandP = styled.div`
    display: flex;
    box-shadow: 0.5vw 0.6vw 2vw;
    padding: 10px 0 10px 0;
    flex-direction: column;
    align-items: center;
    margin:0 1vw 0 1vw;
    background-color: rgb(148,0,211,0.25);
    border-radius: 1vw;

    h1{
        text-shadow:0.2vw 0.3vw 0.2vw black;
        color: darkviolet;
        font-size: 5vw;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    p{  
        font-size: 2vw;
        text-align: justify;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        margin: 1vw;

    }
`
export const ImgLandP = styled.img`
    width: 44%;
    margin: 1vw;
    border: 0.5vw solid lightblue;
`
export const HomeFooter = styled.header`
    width: 100%;
    height: auto;
    background-color: darkviolet;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img{
        margin: 1vw 0 1vw 0;
        width: 10%;
    }
    `