import styled from "styled-components";

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
    min-height: 100vh;
    align-items: center;
    justify-content: space-evenly;
    align-content: flex-end;
    @media (max-width:476px) {
    align-content: space-between;
    padding-top: 1rem;
    }
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
    display: flex;
    align-items: flex-end;
    img {
        width: 100%;
    }
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
    font-size: 1rem;
    border: 1px solid #ff0;
    padding: 1rem;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s;
`