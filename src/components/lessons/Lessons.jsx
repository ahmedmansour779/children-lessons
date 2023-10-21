import { Link } from "react-router-dom";
import lessons from "../../data/lessons";
import { part1, part2, part3, part4 } from "../../data/parts";
import style from "../../styles/config";
import { LessonCart, LessonWrapper, LessonsContainer } from "../../styles/lessons";

export default function Lessons() {
    return (
        <LessonWrapper>
            <LessonsContainer>
                {
                    lessons.map((item) => (
                        <Link key={item.id} to={`/lessons/${item.id}`}>
                            {
                                part1.includes(item.id) ?
                                    <LessonCart style={{ backgroundColor: style.part1Color, color: "" }}>
                                        <div>{item.id}</div>
                                        <div>{item.title}</div>
                                    </LessonCart> :
                                    part2.includes(item.id) ?
                                        <LessonCart style={{ backgroundColor: style.part2Color, color: "" }}>
                                            <div>{item.id}</div>
                                            <div>{item.title}</div>
                                        </LessonCart> :
                                        part3.includes(item.id) ?
                                            <LessonCart style={{ backgroundColor: style.part3Color, color: "" }}>
                                                <div>{item.id}</div>
                                                <div>{item.title}</div>
                                            </LessonCart> :
                                            part4.includes(item.id) &&
                                            <LessonCart style={{ backgroundColor: style.part4Color, color: "" }}>
                                                <div>{item.id}</div>
                                                <div>{item.title}</div>
                                            </LessonCart>
                            }
                        </Link>
                    ))
                }
            </LessonsContainer>
        </LessonWrapper>
    )
}
