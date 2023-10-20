import styled from "styled-components";
import partsData from "../data/parts";

const items = partsData.length

export const CircleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
`

export const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
`
