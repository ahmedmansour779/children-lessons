import { Link } from "react-router-dom";
import lessons from "../../data/lessons";
import { part1, part2, part3, part4 } from "../../data/parts";
import style from "../../styles/config";
import { LessonCart, LessonWrapper, LessonsContainer, LessonsKeyWords } from "../../styles/lessons";

export default function Lessons() {
    return (
        <LessonWrapper>
            <LessonsContainer>
                {
                    lessons.map((item) => (
                        <Link key={item.id} to={`/children-lessons/lessons/${item.id}/1`}>
                            {
                                part1.includes(item.id) ?
                                    <LessonCart style={{ backgroundColor: style.part1Color, color: "" }}>
                                        <div>{item.id}</div>
                                        <div>{item.title1}</div>
                                    </LessonCart> :
                                    part2.includes(item.id) ?
                                        <LessonCart style={{ backgroundColor: style.part2Color, color: "" }}>
                                            <div>{item.id}</div>
                                            <div>{item.title1}</div>
                                        </LessonCart> :
                                        part3.includes(item.id) ?
                                            <LessonCart style={{ backgroundColor: style.part3Color, color: "" }}>
                                                <div>{item.id}</div>
                                                <div>{item.title1}</div>
                                            </LessonCart> :
                                            part4.includes(item.id) &&
                                            <LessonCart style={{ backgroundColor: style.part4Color, color: "" }}>
                                                <div>{item.id}</div>
                                                <div>{item.title1}</div>
                                            </LessonCart>
                            }
                        </Link>
                    ))
                }
            </LessonsContainer>
            <LessonsKeyWords>
                <div>
                    <span style={{ backgroundColor: style.part1Color }}></span>
                    <p>الأمن والسلامة في الروضة</p>
                </div>
                <div>
                    <span style={{ backgroundColor: style.part2Color }}></span>
                    <p>الأمن والسلامه الصحية</p>
                </div>
                <div>
                    <span style={{ backgroundColor: style.part3Color }}></span>
                    <p>الأمن والسلامة في المنزل</p>
                </div>
                <div>
                    <span style={{ backgroundColor: style.part4Color }}></span>
                    <p>الأمن والسلامة في الشارع</p>
                </div>
            </LessonsKeyWords>
        </LessonWrapper>
    )
}
