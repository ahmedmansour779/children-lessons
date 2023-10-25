import { IconArrowBigLeftLinesFilled, IconArrowBigRightLinesFilled } from "@tabler/icons-react";
import { Link, useParams } from "react-router-dom";
import lessons from "../../data/lessons";
import { part1, part2, part3, part4 } from "../../data/parts";
import { FooterButton, FooterP, FooterWrapper } from "../../styles/footer";

export default function Footer() {
    let { lessonId, lessonPage } = useParams();
    let itemNumber = +lessonId
    let page = +lessonPage;
    let lesson = lessons[itemNumber - 1]

    return (
        <FooterWrapper>
            <>
                {
                    part1.includes(itemNumber) ?
                        <FooterP part1>{page}</FooterP> :
                        part2.includes(itemNumber) ?
                            <FooterP part2>{page}</FooterP> :
                            part3.includes(itemNumber) ?
                                <FooterP part3>{page}</FooterP> :
                                part4.includes(itemNumber) &&
                                <FooterP part4>{page}</FooterP>
                }
            </>
            <div>
                {
                    page == 1 ?
                        <FooterButton style={{ opacity: "0.3" }} previous disabled>
                            <IconArrowBigLeftLinesFilled />
                        </FooterButton> :
                        <FooterButton previous >
                            <Link to={`/children-lessons/lessons/${lessonId}/${+lessonPage - 1}`}>
                                <IconArrowBigLeftLinesFilled />
                            </Link>
                        </FooterButton>
                }
                <FooterButton>
                    <Link to="/children-lessons/lessons">القائمه</Link>
                </FooterButton>
                {
                    page == lesson.pages ?
                        <FooterButton style={{ opacity: "0.3" }} next disabled>
                            <IconArrowBigRightLinesFilled />
                        </FooterButton> :
                        <FooterButton next >
                            <Link to={`/children-lessons/lessons/${lessonId}/${+lessonPage + 1}`}>
                                <IconArrowBigRightLinesFilled />
                            </Link>
                        </FooterButton>
                }
            </div>
        </FooterWrapper>
    )
}
