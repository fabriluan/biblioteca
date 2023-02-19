import styled from "styled-components";

export const BookSt = styled.div `
    width: 100%;
    max-width: 200px;
    margin: 20px;
    background-color: ${props => props.theme.background};
    padding: 20px 10px 10px 10px;
    display: flex;
    flex-direction: column;
    /* height: 300px; */

    img{
        width: 100%;
        height: 250px;
        border: 1px solid black;
    }

    button{
        margin-top: 10px;
        font-size: 1rem;
        border: 0;
        background-color: #526AEA;
        font-size: 1rem;
        padding: 5px;
        border-radius: 1.5rem;
        cursor: pointer;
        color: ${props => props.theme.background};
    }
`