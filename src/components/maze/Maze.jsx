import { useParams } from "react-router-dom";
import lessons, { lessonMazeMore } from "../../data/lessons";

export default function Maze() {
    let { lessonId } = useParams();
    let itemNumber = +lessonId
    let lesson = lessons[itemNumber - 1]

    return (
        <>
            {
                lessonMazeMore.includes(lesson.id) ?
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                        {
                            lesson.linkMaze.map((value, index) => {
                                return (
                                    <iframe key={index} src={value} title="maze" style={{ width: "26rem", height: "35rem", border: "none" }}></iframe>
                                )
                            })
                        }
                    </div> :
                    <div>
                        <iframe src={lesson.linkMaze} title="maze" style={{ width: "26rem", height: "35rem", border: "none" }}></iframe>
                    </div>
            }

        </>
    )
}
