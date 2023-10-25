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

import { useRef } from 'react';
import { AnswerWrapper, Options, PopupWrapper, RoundHouseWrapper, TitleHouse, TitleHouseWrapper } from "../../styles/roundHouse";
import "./style.css";

export default function RoundHouse() {

    let { lessonId } = useParams();
    let itemNumber = +lessonId
    let lesson = lessons[itemNumber - 1]
    let myArray = []
    let degree = 360 / lesson.circleParts
    let inclination = 0;
    let [dragId, setDragId] = useState(-1)
    let drag = null
    let [show, setShow] = useState(false)
    let [answer, setAnswer] = useState(true)
    let trueAudioRef = useRef(null)
    let falseAudioRef = useRef(null)

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
        let imageSrc = e.target.src.toString();
        let indexW = imageSrc.indexOf("w/")

        imageSrc.indexOf("w/") == 68 ? setDragId(imageSrc[indexW + 2]) : setDragId(-1)
        // imageSrc.indexOf("w/") == 68 && setDragId(+imageSrc[indexW + 2])
        // style
        drag = e.target
        drag.style.opacity = "0.5"
    }


    const handelDragEnd = (e) => {
        e.target.style.opacity = "1"
        // drag = null
        // dragId = null
        console.log(dragId)
    }


    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handelDrop = (e) => {
        // e.preventDefault();
        // console.log("test")
        // if (dragId == e.target.id) {
        //     setShow(true)
        //     setAnswer(true)
        //     e.target.appendChild(drag)
        //     trueAudioRef.current.play()
        // } else {
        //     setShow(true)
        //     console.log(show)
        //     setAnswer(false)
        //     falseAudioRef.current.play()
        // }
        console.log("test")
        e.preventDefault();
        if (dragId === e.target.id) {
            setShow(true);
            setAnswer(true);
            e.target.appendChild(drag);
            trueAudioRef.current.play();
        } else {
            setShow(true);
            setAnswer(false);
            falseAudioRef.current.play();
        }
    }

    const displayStyle = {
        display: show == true ? 'fixed' : "none",
    }

    const hiddenModel = () => {
        setShow(false)
        trueAudioRef.current.pause()
        falseAudioRef.current.pause()
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
                                    // onDragOver={null}
                                    onDrop={handelDrop}
                                    onDragOver={handleDragOver}
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
                                                onDragStart={handelDrag}
                                                onDragEnd={handelDragEnd}
                                                // onDragOver={handleDragOver}
                                                src={value}
                                                draggable={true}
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
                                                    onDragStart={handelDrag}
                                                    onDragEnd={handelDragEnd}
                                                    onDragOver={null}
                                                    src={value}
                                                    draggable={true}
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
                                                        onDragStart={handelDrag}
                                                        onDragEnd={handelDragEnd}
                                                        onDragOver={null}
                                                        src={value}
                                                        draggable={true}
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
                                                        onDragStart={handelDrag}
                                                        onDragEnd={handelDragEnd}
                                                        onDragOver={null}
                                                        src={value}
                                                        draggable={true}
                                                    />
                                                </Carousel.Slide>
                                            )
                                        })
                                    }
                                </Carousel>

                            </Options>
            }
            <PopupWrapper onClick={hiddenModel} style={displayStyle}>
                {
                    answer === true ?
                        <AnswerWrapper>
                            <img src={trueImage} alt='true' />
                            <audio controls ref={trueAudioRef} style={{ display: "none" }}>
                                <source src={trueAudio} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </AnswerWrapper> : null
                }
                {
                    answer === false ?
                        <AnswerWrapper>
                            <img src={falseImage} alt='false' />
                            <audio controls ref={falseAudioRef} style={{ display: "none" }}>
                                <source src={falseAudio} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </AnswerWrapper> : null
                }
            </PopupWrapper>
        </RoundHouseWrapper>
    )
}
