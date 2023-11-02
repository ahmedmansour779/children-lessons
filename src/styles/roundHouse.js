import styled from "styled-components";
import style from "./config";

export const RoundHouseWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    min-width: 100%;
    padding: 2rem 0;
    gap: 4rem;
    flex-wrap: wrap;
`

export const TitleHouseWrapper = styled.div`
    position: absolute;
    width: 30%;
    height: 30%;
    margin: 34%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
`

export const TitleHouse = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid #000;
    border-radius: 50%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
`

export const Options = styled.div`
    width: fit-content;
    height: 75vh;
    overflow-x: scroll;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    border: 1px solid #000;
    gap: 1rem;
    padding: 0.5rem;
    border-radius: 10px;
    @media (max-width:768px) {
        height: auto;
        overflow-x: scroll;
        overflow-y: hidden;
    }
    &::-webkit-scrollbar {
        width: 0.75rem;
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background-color : ${props => (props.part1 ?
        style.part1Color : props.part2 ?
            style.part2Color : props.part3 ?
                style.part3Color : style.part4Color)};
        border-radius: 20px;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        -ms-border-radius: 20px;
        -o-border-radius: 20px;
    }
    img {
        height: 10rem;
        width: 100%;
        border: 1px solid ${style.shadow};
        border-radius: 10px;
        overflow: hidden;
        cursor: move;
        @media (max-width: 768px) {
            width: auto;
        }
    }
    
`

export const PopupWrapper = styled.div`
    background-color: #000;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 5;
`

export const AnswerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
    justify-content: center;
`