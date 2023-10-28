import styled from "styled-components";

export const LessonsContainer = styled.div.attrs((props) => ({
    className: props.className || 'container',
}))`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content:space-between;
    @media (max-width:375px) {
        justify-content:center;
    }
`

export const LessonWrapper = styled.div`
    min-height: 100vh;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`


export const LessonCart = styled.div`
    width: 8rem;
    height: 8rem;
    font-weight: bold;
    text-align: center;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 10px;
    gap: 1rem;
    color: #F5E8B7;
    transition: 0.3s all ease-in-out;
    cursor: pointer;
    overflow: hidden;
    align-items: center;
`

export const LessonsKeyWords = styled.div.attrs((props) => ({
    className: props.className || 'container',
}))`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
    div {
        display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 0.5rem;
        span {
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
        }
    }
`