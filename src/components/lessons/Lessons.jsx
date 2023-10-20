import { Link } from "react-router-dom";
import lessons from "../../data/lessons";
import { LessonCart, LessonWrapper, LessonsContainer } from "../../styles/lessons";

export default function Lessons() {

    const part1 = [1, 2, 3, 4, 5, 6, 7, 8]
    const part2 = [9, 10, 11, 12, 13, 14, 15, 16, 17]
    const part3 = [18, 19, 20, 21, 22, 23]
    const part4 = [24, 25, 26, 27, 28, 29, 30]

    console.log(part3.includes(3))

    return (
        <LessonWrapper>
            <LessonsContainer>
                {
                    lessons.map((item) => (
                        <Link key={item.id} to={`/lesson/${item.id}`}>
                            {
                                part1.includes(item.id) ?
                                    <LessonCart style={{ backgroundColor: "#99B080", color: "" }}>
                                        <div>{item.id}</div>
                                        <div>{item.title}</div>
                                    </LessonCart> :
                                    part2.includes(item.id) ?
                                        <LessonCart style={{ backgroundColor: "#7c81AD", color: "" }}>
                                            <div>{item.id}</div>
                                            <div>{item.title}</div>
                                        </LessonCart> :
                                        part3.includes(item.id) ?
                                            <LessonCart style={{ backgroundColor: "#9d76C1", color: "" }}>
                                                <div>{item.id}</div>
                                                <div>{item.title}</div>
                                            </LessonCart> :
                                            part4.includes(item.id) &&
                                            <LessonCart style={{ backgroundColor: "#1F4172", color: "" }}>
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
