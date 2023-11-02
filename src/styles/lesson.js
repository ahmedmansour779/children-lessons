import styled from "styled-components";

export const LessonContainer = styled.div.attrs((props) => ({
    className: props.className || 'container',
}))`
    display: flex;
    padding: 2vh 0;
    flex-direction: column;
    min-height: 96vh;
    justify-content: space-between;
`

export const LessonContent = styled.div`
    display: flex;
    justify-content: center;
`

export const CarouselCart = styled.div`
    overflow: hidden;
    width: 36rem;
    height: 21rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    img {
        height: 100%;
    }
`