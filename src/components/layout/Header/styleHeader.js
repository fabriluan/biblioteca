import styled from "styled-components";

export const HeaderSt = styled.header `

    background-color: ${props => props.theme.div};
    color: ${props => props.theme.background};
    height: 70px;
    /* padding: 15px 0; */

    > .center{
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h2{
        font-size: 1.5rem;
        font-weight: 600;
    }

    p{
        font-size: 1.05rem;
        padding: 7px;
        position: relative;
        cursor: pointer;

        ::before{
            content: '';
            position: absolute;
            top: 0;
            right: 50%;
            width: 0%;
            background-color: ${props => props.theme.background};
            height: 1px;
        }

        ::after{
            content: '';
            position: absolute;
            bottom: 0;
            right: 50%;
            width: 0%;
            background-color: ${props => props.theme.background};
            height: 1px;
        }

        :hover{

            font-size: 1.1rem;
            transition: 0.7s;

            ::before{
                width: 100%;
                right: 0%;
                transition: 0.7s;
            }

            ::after{
                width: 100%;
                right: 0%;
                transition: 0.7s;
            }
        }
    }

`