import styled from "styled-components";
import style from "./config";

export const ChoicesWrapper = styled.div`
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const Title = styled.div`
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    p {
        font-size: 2rem;
        font-weight: bold;
    }
`

export const HeaderImage = styled.div`
    display: flex;
    justify-content: center;
    & > img {
        height: 10rem;
    }
`

export const Options = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 1rem;
    align-items: center;
    border: 1px solid ${style.shadow};
    border-radius: 10px;
    & > div {
        width: 30%;
        img {
            width: 100%;
            cursor: pointer;
        }
    }
`