import styled from "styled-components";

export const IntroWrapper = styled.div`
    min-height: 100vh;
    background-color: #D988B9;
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
    justify-content: space-evenly;
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
        justify-content: space-evenly;
        gap: 2rem;
        width: 50%;
        text-align: center;
        @media (max-width:476px) {
            width: 100%; 
        }
    }
    & > div:last-child {
        display: flex;
        align-items: flex-end;
        width: 50%;
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: 1rem;
        align-content: center;
    @media (max-width:476px) {
            width: 100%; 
    }
    img {
        width: 35%;
        height: 14rem;
        @media (max-width:476px) {
            width: 47%; 
        }
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

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`

export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    img {
        width: 4rem; 
    }
`