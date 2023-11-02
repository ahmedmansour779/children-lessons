import { useState } from "react";
import { useParams } from "react-router-dom";
import lessons from "../../data/lessons";
import falseAudio from "../../shared/answer/false.mp3";
import falseImage from "../../shared/answer/false.png";
import trueAudio from "../../shared/answer/true.mp3";
import trueImage from "../../shared/answer/true.png";
import { ChoicesItem, ChoicesWrapper } from "../../styles/delivery";
import { AnswerWrapper, PopupWrapper } from "../../styles/roundHouse";

export default function Delivery() {
    let { lessonId } = useParams();
    let itemNumber = +lessonId
    let lesson = lessons[itemNumber - 1]
    let drag = null
    let [show, setShow] = useState(null)
    let [answer, setAnswer] = useState(null)

    const handelDrag = (e) => {
        drag = e.target
        drag.style.opacity = "0.5"
    }

    const handelDragEnd = (e) => {
        e.target.style.opacity = "1"
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const trueAnswer = () => {
        setAnswer(true);
        setShow(true);
    }
    const falseAnswer = () => {
        setAnswer(false);
        setShow(true);
    }

    const handelDrop = (e) => {
        e.preventDefault();
        e.target.className == drag.className ?
            trueAnswer() :
            falseAnswer()
    }

    const hiddenModel = () => {
        setShow(false)
    }

    return (
        <>
            <ChoicesWrapper>
                <ChoicesItem>
                    {
                        lesson.rightColumn.map((value, index) => {
                            return (
                                <div key={index} draggable onDrag={handelDrag} onDragEnd={handelDragEnd} onDragOver={handleDragOver} onDrop={handelDrop}>
                                    <img src={value} className={index + 1} alt="take to right column" />
                                </div>
                            )
                        })
                    }
                </ChoicesItem>
                <ChoicesItem style={{ flexDirection: "column-reverse" }}>
                    {
                        lesson.leftColumn.map((value, index) => {
                            return (
                                <div key={index} draggable onDrag={handelDrag} onDragEnd={handelDragEnd} onDragOver={handleDragOver} onDrop={handelDrop}>
                                    <img src={value} className={index + 1} alt="take to left column" />
                                </div>
                            )
                        })
                    }
                </ChoicesItem>
            </ChoicesWrapper>
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
        </>
    )
}
