import { useParams } from "react-router-dom";
import lessons from "../../data/lessons";
import { PuzzleGame, PuzzleGameWrapper, PuzzleOptions, PuzzleSpace, PuzzleWrapper } from "./style";

export default function Puzzle() {
    let { lessonId } = useParams();
    let itemNumber = +lessonId
    let lesson = lessons[itemNumber - 1]
    const gameArray = ["0% 0%", "100% 0%", "0% 100%", "100% 100%"]
    let drag = null

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

    const handelDrop = (e) => {
        e.preventDefault();
        e.target.className == drag.id ?
            e.target.appendChild(drag) :
            null
    }

    console.log(lesson.imagePuzzle1)
    console.log(lesson.imagePuzzle2)

    return (
        <PuzzleGameWrapper>
            {
                lesson.imagePuzzle1 &&
                <PuzzleGame>
                    {/* option */}
                    <PuzzleWrapper>
                        <PuzzleOptions>
                            {
                                gameArray.map((value, i) => {
                                    return (
                                        <div style={{
                                            backgroundImage: `url(${lesson.imagePuzzle1})`,
                                            backgroundPosition: `${value}`,
                                            backgroundRepeat: "no-repeat",
                                            width: "19.1rem",
                                            height: "12.7rem"
                                        }} key={i} id={i + 1}
                                            draggable
                                            onDrag={handelDrag}
                                            onDragEnd={handelDragEnd}
                                        >
                                        </div>
                                    )
                                })
                            }
                        </PuzzleOptions>
                    </PuzzleWrapper>
                    <PuzzleSpace>
                        {
                            gameArray.map((value, i) => {
                                return (
                                    <div key={value} className={i + 1} onDragOver={handleDragOver} onDrop={handelDrop}>
                                    </div>
                                )
                            })
                        }
                    </PuzzleSpace>
                </PuzzleGame>
            }
            {
                lesson.imagePuzzle2 &&
                <PuzzleGame>
                    {/* option */}
                    <PuzzleWrapper>
                        <PuzzleOptions>
                            {
                                gameArray.map((value, i) => {
                                    return (
                                        <div style={{
                                            backgroundImage: `url(${lesson.imagePuzzle2})`,
                                            backgroundPosition: `${value}`,
                                            backgroundRepeat: "no-repeat",
                                            width: "19.1rem",
                                            height: "12.7rem"
                                        }} key={i} id={i + 1}
                                            draggable
                                            onDrag={handelDrag}
                                            onDragEnd={handelDragEnd}
                                        >
                                        </div>
                                    )
                                })
                            }
                        </PuzzleOptions>
                    </PuzzleWrapper>
                    <PuzzleSpace>
                        {
                            gameArray.map((value, i) => {
                                return (
                                    <div key={value} className={i + 1} onDragOver={handleDragOver} onDrop={handelDrop}>
                                    </div>
                                )
                            })
                        }
                    </PuzzleSpace>
                </PuzzleGame>
            }
            {
                lesson.imagePuzzle3 &&
                <PuzzleGame>
                    {/* option */}
                    <PuzzleWrapper>
                        <PuzzleOptions>
                            {
                                gameArray.map((value, i) => {
                                    return (
                                        <div style={{
                                            backgroundImage: `url(${lesson.imagePuzzle3})`,
                                            backgroundPosition: `${value}`,
                                            backgroundRepeat: "no-repeat",
                                            width: "19.1rem",
                                            height: "12.7rem"
                                        }} key={i} id={i + 1}
                                            draggable
                                            onDrag={handelDrag}
                                            onDragEnd={handelDragEnd}
                                        >
                                        </div>
                                    )
                                })
                            }
                        </PuzzleOptions>
                    </PuzzleWrapper>
                    <PuzzleSpace>
                        {
                            gameArray.map((value, i) => {
                                return (
                                    <div key={value} className={i + 1} onDragOver={handleDragOver} onDrop={handelDrop}>
                                    </div>
                                )
                            })
                        }
                    </PuzzleSpace>
                </PuzzleGame>
            }


        </PuzzleGameWrapper>
    )
}
