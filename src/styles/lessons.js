import styled from "styled-components";

export const LessonsContainer = styled.div.attrs((props) => ({
    className: props.className || 'container',
}))`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content:center;
`

export const LessonWrapper = styled.div`
    min-height: 100vh;
    padding: 2rem 0;
`


export const LessonCart = styled.div`
    width: 10rem;
    height: 10rem;
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