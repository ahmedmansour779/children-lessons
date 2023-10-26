import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import lessons from "../../data/lessons";
import { part1, part2, part3 } from '../../data/parts';


import falseAudio from "../../shared/answer/false.mp3";
import falseImage from "../../shared/answer/false.png";
import trueAudio from "../../shared/answer/true.mp3";
import trueImage from "../../shared/answer/true.png";

import { AnswerWrapper, Options, PopupWrapper, RoundHouseWrapper, TitleHouse, TitleHouseWrapper } from "../../styles/roundHouse";
import "./style.css";

export default function RoundHouse() {

    let { lessonId } = useParams();
    let itemNumber = +lessonId
    let lesson = lessons[itemNumber - 1]
    let myArray = []
    let degree = 360 / lesson.circleParts
    let inclination = 0;
    let [dragId, setDragId] = useState(null)
    let drag = null

    let [show, setShow] = useState(null)
    let [answer, setAnswer] = useState(null)

    for (let i = 1; i <= lesson.circleParts; i++) {
        myArray.push(i)
    }

    // how many part?
    {
        lesson.circleParts == +7 ?
            inclination = 38.4286 :
            lesson.circleParts == +5 ?
                inclination = 18 :
                lesson.circleParts == +6 ?
                    inclination = 30 : null
    }

    // drag event 
    const handelDrag = (e) => {
        let idImage = e.target.className;
        // let indexW = imageSrc.indexOf("w/")
        idImage !== undefined ? setDragId(idImage) : setDragId(null)
        drag = e.target
        drag.style.opacity = "0.5"
    }
    const handelDragEnd = (e) => {
        e.target.style.opacity = "1"
    }
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    // drop event
    const trueAnswer = (e) => {
        setAnswer(true);
        setShow(true);
        e.target.appendChild(drag);
        // trueAudioRef.current.play();
    }
    const falseAnswer = () => {
        setAnswer(false);
        setShow(true);
        // falseAudioRef.current.play();
        // console.log(false)
    }
    const handelDrop = (e) => {
        // console.log("test")
        e.preventDefault();
        console.log(e.target.children)
        if (dragId == e.target.id) {
            trueAnswer(e)
        } else if (dragId !== e.target.id) {
            falseAnswer()
        }
    }

    // console.log(show, answer)

    const hiddenModel = () => {
        setShow(false)
    }

    return (
        <RoundHouseWrapper>
            <div>
                <div className="circle" >
                    <TitleHouseWrapper>
                        <TitleHouse>
                            {lesson.title1}
                        </TitleHouse>
                    </TitleHouseWrapper>
                    {
                        myArray.map((e, index) => {
                            return (
                                <div
                                    id={e}
                                    className="part"
                                    key={index}
                                    draggable={true}
                                    onDragOver={handleDragOver} onDrop={handelDrop}
                                    style={
                                        {
                                            transform: `rotate(${index * degree}deg) skew(0deg, -${inclination}deg)`,
                                            WebkitTransform: `rotate(${index * degree}deg) skew(0deg, -${inclination}deg)`,
                                            MozTransform: `rotate(${index * degree}deg) skew(0deg, -${inclination}deg)`,
                                            msTransform: `rotate(${index * degree}deg) skew(0deg, -${inclination}deg)`,
                                            OTransform: `rotate(${index * degree}deg) skew(0deg, -${inclination}deg)`,
                                        }
                                    }>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {
                part1.includes(itemNumber) ?
                    <Options part1>
                        <Carousel
                            slideSize="70%"
                            orientation="vertical"
                            slideGap="xs"
                            align="start"
                            draggable={false}>
                            {
                                lesson.allImage.map((value, i) => {
                                    // console.log(value.includes("new")) // this to include or not
                                    // let indexW = value.indexOf("w/")
                                    // console.log(value[indexW + 2]) // to get id from image true
                                    return (
                                        <Carousel.Slide key={i} style={{ width: "100%" }} >
                                            <img
                                                onDrag={handelDrag}
                                                onDragEnd={handelDragEnd}
                                                src={value}
                                                draggable={true}
                                                className={lesson.imageTrue.includes(value) && lesson.imageTrue.indexOf(value) + 1}
                                            />
                                        </Carousel.Slide>
                                    )
                                })
                            }
                        </Carousel>

                    </Options> :
                    part2.includes(itemNumber) ?
                        <Options part2>
                            <Carousel
                                slideSize="70%"
                                orientation="vertical"
                                slideGap="xs"
                                align="start"
                                draggable={false}>
                                {
                                    lesson.allImage.map((value, i) => {
                                        // console.log(value.includes("new")) // this to include or not
                                        // let indexW = value.indexOf("w/")
                                        // console.log(value[indexW + 2]) // to get id from image true
                                        return (
                                            <Carousel.Slide key={i} style={{ width: "100%" }} >
                                                <img
                                                    onDrag={handelDrag}
                                                    onDragEnd={handelDragEnd}
                                                    src={value}
                                                    draggable={true}
                                                    className={lesson.imageTrue.includes(value) && lesson.imageTrue.indexOf(value) + 1}
                                                />
                                            </Carousel.Slide>
                                        )
                                    })
                                }
                            </Carousel>

                        </Options> :
                        part3.includes(itemNumber) ?
                            <Options part3>
                                <Carousel
                                    slideSize="70%"
                                    orientation="vertical"
                                    slideGap="xs"
                                    align="start"
                                    draggable={false}>
                                    {
                                        lesson.allImage.map((value, i) => {
                                            // console.log(value.includes("new")) // this to include or not
                                            // let indexW = value.indexOf("w/")
                                            // console.log(value[indexW + 2]) // to get id from image true
                                            return (
                                                <Carousel.Slide key={i} style={{ width: "100%" }} >
                                                    <img
                                                        onDrag={handelDrag}
                                                        onDragEnd={handelDragEnd}
                                                        src={value}
                                                        draggable={true}
                                                        className={lesson.imageTrue.includes(value) && lesson.imageTrue.indexOf(value) + 1}
                                                    />
                                                </Carousel.Slide>
                                            )
                                        })
                                    }
                                </Carousel>

                            </Options> :
                            <Options part4>
                                <Carousel
                                    slideSize="70%"
                                    orientation="vertical"
                                    slideGap="xs"
                                    align="start"
                                    draggable={false}>
                                    {
                                        lesson.allImage.map((value, i) => {
                                            // console.log(value.includes("new")) // this to include or not
                                            // let indexW = value.indexOf("w/")
                                            // console.log(value[indexW + 2]) // to get id from image true
                                            return (
                                                <Carousel.Slide key={i} style={{ width: "100%" }} >
                                                    <img
                                                        onDrag={handelDrag}
                                                        onDragEnd={handelDragEnd}
                                                        src={value}
                                                        draggable={true}
                                                        className={lesson.imageTrue.includes(value) && lesson.imageTrue.indexOf(value) + 1}
                                                    />
                                                </Carousel.Slide>
                                            )
                                        })
                                    }
                                </Carousel>

                            </Options>
            }
            {
                show == true &&
                <PopupWrapper onClick={hiddenModel} style={{ display: "fixed" }}>
                    {
                        answer === true &&
                        <AnswerWrapper>
                            <img src={trueImage} alt='true' />
                            <audio controls autoPlay style={{ display: "none" }}>
                                <source src={trueAudio} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </AnswerWrapper>
                    }
                    {
                        answer === false &&
                        <AnswerWrapper>
                            <img src={falseImage} alt='false' />
                            <audio controls autoPlay style={{ display: "none" }}>
                                <source src={falseAudio} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </AnswerWrapper>
                    }
                </PopupWrapper>
            }

        </RoundHouseWrapper>
    )
}
