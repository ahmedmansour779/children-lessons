import { useParams } from "react-router-dom";
import lessons from "../../data/lessons";
import { part1, part2, part3, part4 } from "../../data/parts";
import { LessonContainer, Title } from "../../styles/lesson";

export default function Lesson() {

    let { lessonId } = useParams();
    const itemNumber = +lessonId - 1
    const lesson = lessons[itemNumber]

    console.log(lesson.title)

    return (
        <LessonContainer>
            {
                part1.includes(itemNumber) ?
                    <Title part1>
                        {lesson.title}
                    </Title> :
                    part2.includes(itemNumber) ?
                        <Title part2>
                            {lesson.title}
                        </Title> :
                        part3.includes(itemNumber) ?
                            <Title part3>
                                {lesson.title}
                            </Title> :
                            part4.includes(itemNumber) &&
                            <Title part4>
                                {lesson.title}
                            </Title>
            }
            <div>

            </div>

        </LessonContainer>
    )
}
{/* <LessonWrapper>
    <Link style={{ color: "#332522" }} to={`/lesson/${lessonId - 1}`}><IconArrowBigLeftFilled /></Link>
    <div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <Link style={{ color: "#332522" }} to={`/lesson/${+lessonId + 1}`}><IconArrowBigRightFilled /></Link>
</LessonWrapper> */}