import styled from "styled-components";
import style from "./config";

export const LessonContainer = styled.div.attrs((props) => ({
    className: props.className || 'container',
}))`
    display: flex;
    padding: 2rem 0;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.div`
    color : ${props => (props.part1 ?
        style.part1Color : props.part2 ?
            style.part2Color : props.part3 ?
                style.part3Color : style.part4Color)};
    font-size: 2rem;
    text-shadow: 0 0 16px ${style.shadow};
`