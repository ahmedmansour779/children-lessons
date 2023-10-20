import styled from "styled-components";
import style from "./config";

export const IntroWrapper = styled.div`
    min-height: 100vh;
    background-color: #ffc15b;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-wrap: wrap;
`

export const IntroContent = styled.div.attrs((props) => ({
    className: props.className || 'container',
}))`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    min-height: 100%;
    align-items: center;
    justify-content: space-evenly;
    h1, h3 {
        font-family: 'Gochi Hand', cursive;
        color: #332522
    }
    & > div:first-child {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
    & > div:last-child {
        min-height: 100vh;
    display: flex;
    align-items: flex-end;
    }
`

export const Audio = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 50%;
    background: #00BCD4;
`

export const Text = styled.div`
    font-size: 2rem;
    border: 1px solid #ff0;
    padding: 2rem;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background: ${style.introBackgroundColor};
    }
`