import { Pagination } from "@mantine/core";
import { IconArrowBigLeftFilled, IconArrowBigRightFilled } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import lessons from "../../data/lessons";
import { LessonWrapper } from "../../styles/lesson";

export default function Lesson() {

    let { lessonId } = useParams();

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        // You can perform any additional actions here when the page is changed
        console.log(`Page changed to ${page}`);
    };

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
                <div>
                    <h1>Simple Pagination Example</h1>
                    <Pagination
                        total={lessons.length}
                        value={currentPage}
                        onChange={handlePageChange}
                        withGoto
                        sizes={[5, 10]}
                    />
                    <Pagination
                        total={lessons.length}
                        color="yellow"
                        size="xl"
                        radius="md"
                        value={currentPage}
                    />
                </div>
            </div >
        </>
    )
}