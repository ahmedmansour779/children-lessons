import styled from "styled-components"
import style from "./config"

export const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
        display: flex;
        gap: 1rem;
        button:nth-child(2) {
            font-size: 1.2rem;
        }
    }
`

export const FooterButton = styled.button`
    padding: 0.3rem;
    background: transparent;
    border: none;
    cursor: pointer;
    color: ${props => (props.next ? style.next : style.previous)} !important ;
`

export const FooterP = styled.p`
    background-color: ${props => (props.part1 ?
        style.part1Color : props.part2 ?
            style.part2Color : props.part3 ?
                style.part3Color : style.part4Color)};
        border-radius: 50%;
        width: 1rem;
        height: 1rem;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        color: white;
        cursor: pointer;
`