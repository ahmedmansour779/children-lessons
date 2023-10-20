import { IconArrowBigLeftFilled, IconArrowBigRightFilled } from "@tabler/icons-react";
import { Link, useParams } from "react-router-dom";
import { LessonWrapper } from "../../styles/lesson";

export default function Lesson() {

    let { lessonId } = useParams();


    return (
        <>
            <div className="container">
                <LessonWrapper>
                    <Link style={{ color: "#332522" }} to={`/lesson/${lessonId - 1}`}><IconArrowBigLeftFilled /></Link>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <Link style={{ color: "#332522" }} to={`/lesson/${+lessonId + 1}`}><IconArrowBigRightFilled /></Link>
                </LessonWrapper>

            </div >
        </>
    )
}