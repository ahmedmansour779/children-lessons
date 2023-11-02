import { useState } from "react";
import { useParams } from "react-router-dom";
import lessons, { lessonDescription } from "../../data/lessons";
import falseAudio from "../../shared/answer/false.mp3";
import falseImage from "../../shared/answer/false.png";
import trueAudio from "../../shared/answer/true.mp3";
import trueImage from "../../shared/answer/true.png";
import { ChoicesWrapper, HeaderImage, Options, Title } from "../../styles/choices";
import { AnswerWrapper, PopupWrapper } from "../../styles/roundHouse";

export default function Choices() {
    let { lessonId } = useParams();
    let itemNumber = +lessonId
    let lesson = lessons[itemNumber - 1]
    let [show, setShow] = useState(null)
    let [answer, setAnswer] = useState(null)

    const trueAnswer = () => {
        setAnswer(true);
        setShow(true);
    }
    const falseAnswer = () => {
        setAnswer(false);
        setShow(true);
    }

    const hiddenModel = () => {
        setShow(false)
    }

    const questions = (e) => {
        e.target.className == "true" ?
            trueAnswer() :
            falseAnswer()
    }

    return (
        <>
            <ChoicesWrapper>
                {
                    lesson.titleChoice &&
                    <Title>
                        <p>
                            {lesson.titleQuizzes}
                        </p>
                    </Title>
                }
                {
                    lesson.imageChoice1 &&
                    <HeaderImage>
                        <img src={lesson.imageChoice1} />
                    </HeaderImage>
                }
                <Options>
                    {
                        lessonDescription.includes(itemNumber) ?
                            lesson.answerImages1.map((value, i) => {
                                return (
                                    <div key={i}>
                                        <img src={value} id={i + 1} className={i == 2 ? "true" : "false"} />
                                    </div>
                                )
                            }) : null
                    }
                    {
                        lesson.answerImages1.length == 3 && !lessonDescription.includes(itemNumber) ?
                            lesson.answerImages1.map((value, i) => {
                                return (
                                    <div key={i}>
                                        <img src={value} id={i + 1} className={i == 2 ? "true" : "false"} onClick={questions} />
                                    </div>
                                )
                            }) : null
                    }
                    {
                        lesson.answerImages1.length == 2 && !lessonDescription.includes(itemNumber) ?
                            lesson.answerImages1.map((value, i) => {
                                return (
                                    <div key={i}>
                                        <img src={value} id={i + 1} className={i == 1 ? "true" : "false"} onClick={questions} />
                                    </div>
                                )
                            }) : null
                    }
                </Options>
                {
                    lesson.imageChoice2 &&
                    <HeaderImage>
                        <img src={lesson.imageChoice2} />
                    </HeaderImage>
                }
                {
                    lesson.answerImages2 &&
                    <Options style={{ flexDirection: "row-reverse" }}>
                        {
                            lesson.answerImages2.length == 3 && !lessonDescription.includes(itemNumber) ?
                                lesson.answerImages2.map((value, i) => {
                                    return (
                                        <div key={i}>
                                            <img src={value} id={i + 1} className={i == 2 ? "true" : "false"} onClick={questions} />
                                        </div>
                                    )
                                }) :
                                lesson.answerImages2.map((value, i) => {
                                    return (
                                        <div key={i}>
                                            <img src={value} id={i + 1} className={i == 1 ? "true" : "false"} onClick={questions} />
                                        </div>
                                    )
                                })
                        }
                    </Options>
                }

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
