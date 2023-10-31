import styled from "styled-components";
import style from "../../styles/config";

export const PuzzleGameWrapper = styled.div`
    width: 100%;
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const PuzzleGame = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`

export const PuzzleWrapper = styled.div`
    min-height: fit-content;
    max-height: 40rem;
    padding: 1rem;
    border: 1px solid ${style.shadow};
    border-radius: 10px;
    overflow-y: scroll;
`

export const PuzzleOptions = styled.div`
    display: flex;
    justify-items: start;
    align-content: center;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 1rem;
    height: fit-content;
`

export const PuzzleSpace = styled.div`
    width: 38.2rem;
    height: 25.5rem;
    border: 1px solid #000;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    & > div {
        border: 1px solid #000;
        height: 49.6%;
        width: 49.6%;
        & > div {
            width: 100%;
            height: 100%;
        }
    }
`