import styled from "styled-components";
import style from "./config";

export const ChoicesWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 2rem ;
`

export const ChoicesItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid ${style.shadow};
    border-radius: 10px;
    background-color: ${style.next};
    justify-content: space-between;
    width: 30%;
    height: 100vh;
    @media (max-width:476px) {
        width: 27%;
        height: 42vh; 
    }
    div {
        height: 30%;
    }
    img {
        height: 100%;
        width: 100%;
    }
`