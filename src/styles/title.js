import styled from "styled-components";
import style from "./config";

export const TitleWrapper = styled.div`
    color: #fff;
    padding: 1rem 2rem;
    width: fit-content;
    border-radius: 20px;
    margin: 0 auto;
    background-color : ${props => (props.part1 ?
        style.part1Color : props.part2 ?
            style.part2Color : props.part3 ?
                style.part3Color : style.part4Color)};
    font-size: 3rem;
    text-shadow: 0 0 16px ${style.shadow};
    text-align: center;
`