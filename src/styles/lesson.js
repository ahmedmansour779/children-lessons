import styled from "styled-components";

export const LessonWrapper = styled.div`
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    a {
        background-color: #00bcd475;
        padding: 1rem;
        border-radius: 50%;
        border: 1px solid #00bcd4;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s all ease-in-out;
        &:hover {
            background-color: #00bcd4;
        }
    }
`