import styled from "styled-components";

export const CartSt = styled.section `
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
    display: ${props => props.isVisible ? 'flex' : 'none'};
    /* display: flex; */
    justify-content: flex-end;
    background-color: rgba(0, 0, 0, 0.3);
`

export const CartInfo = styled.div `
    min-height: 100%;
    overflow-y: scroll;
    width: 100%;
    max-width: 500px;
    padding: 20px;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    z-index: 99;

    button{
        display: flex;
        border: 0;
        background-color: transparent;
        font-size: 2rem;
        cursor: pointer;
    }
`

export const BookInfo = styled.div `
    display: flex;
    align-items: center;
    margin-top: 20px;

    img{
        width: 100%;
        max-width: 100px;
        border: 1px solid black;
    }

    h2{
        font-size: 1.3rem;
        margin: 0 10px;
    }
`