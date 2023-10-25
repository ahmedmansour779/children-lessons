import { useParams } from "react-router-dom";
import lessons from "../../data/lessons";
import { part1, part2, part3, part4 } from "../../data/parts";
import { TitleWrapper } from "../../styles/title";

export default function Title() {
    let { lessonId, lessonPage } = useParams();
    let itemNumber = +lessonId
    let page = +lessonPage;
    let lesson = lessons[itemNumber - 1]
    return (
        <>
            {
                page == 1 &&
                    part1.includes(itemNumber) ?
                    <TitleWrapper part1>
                        {lesson.title1}
                    </TitleWrapper> :
                    part2.includes(itemNumber) ?
                        <TitleWrapper part2>
                            {lesson.title1}
                        </TitleWrapper> :
                        part3.includes(itemNumber) ?
                            <TitleWrapper part3>
                                {lesson.title1}
                            </TitleWrapper> :
                            part4.includes(itemNumber) &&
                            <TitleWrapper part4>
                                {lesson.title1}
                            </TitleWrapper>
            }
            {
                page == 2 &&
                    part1.includes(itemNumber) ?
                    <TitleWrapper part1>
                        {lesson.title2}
                    </TitleWrapper> :
                    part2.includes(itemNumber) ?
                        <TitleWrapper part2>
                            {lesson.title2}
                        </TitleWrapper> :
                        part3.includes(itemNumber) ?
                            <TitleWrapper part3>
                                {lesson.title2}
                            </TitleWrapper> :
                            part4.includes(itemNumber) &&
                            <TitleWrapper part4>
                                {lesson.title2}
                            </TitleWrapper>
            }
            {
                page == 3 && page !== lesson.pages &&
                    part1.includes(itemNumber) ?
                    <TitleWrapper part1>
                        {lesson.title3}
                    </TitleWrapper> :
                    part2.includes(itemNumber) ?
                        <TitleWrapper part2>
                            {lesson.title3}
                        </TitleWrapper> :
                        part3.includes(itemNumber) ?
                            <TitleWrapper part3>
                                {lesson.title3}
                            </TitleWrapper> :
                            part4.includes(itemNumber) &&
                            <TitleWrapper part4>
                                {lesson.title3}
                            </TitleWrapper>
            }
            {
                page == 4 && page !== lesson.pages &&
                    part1.includes(itemNumber) ?
                    <TitleWrapper part1>
                        {lesson.title4}
                    </TitleWrapper> :
                    part2.includes(itemNumber) ?
                        <TitleWrapper part2>
                            {lesson.title4}
                        </TitleWrapper> :
                        part3.includes(itemNumber) ?
                            <TitleWrapper part3>
                                {lesson.title4}
                            </TitleWrapper> :
                            part4.includes(itemNumber) &&
                            <TitleWrapper part4>
                                {lesson.title4}
                            </TitleWrapper>
            }
            {
                page == 5 & page != lesson.pages &&
                    part1.includes(itemNumber) ?
                    <TitleWrapper part1>
                        {lesson.title5}
                    </TitleWrapper> :
                    part2.includes(itemNumber) ?
                        <TitleWrapper part2>
                            {lesson.title5}
                        </TitleWrapper> :
                        part3.includes(itemNumber) ?
                            <TitleWrapper part3>
                                {lesson.title5}
                            </TitleWrapper> :
                            part4.includes(itemNumber) &&
                            <TitleWrapper part4>
                                {lesson.title5}
                            </TitleWrapper>
            }
            {
                page == 6 & page != lesson.pages &&
                    part1.includes(itemNumber) ?
                    <TitleWrapper part1>
                        {lesson.title6}
                    </TitleWrapper> :
                    part2.includes(itemNumber) ?
                        <TitleWrapper part2>
                            {lesson.title6}
                        </TitleWrapper> :
                        part3.includes(itemNumber) ?
                            <TitleWrapper part3>
                                {lesson.title6}
                            </TitleWrapper> :
                            part4.includes(itemNumber) &&
                            <TitleWrapper part4>
                                {lesson.title6}
                            </TitleWrapper>
            }
            {
                page == 7 & page != lesson.pages &&
                    part1.includes(itemNumber) ?
                    <TitleWrapper part1>
                        {lesson.title7}
                    </TitleWrapper> :
                    part2.includes(itemNumber) ?
                        <TitleWrapper part2>
                            {lesson.title7}
                        </TitleWrapper> :
                        part3.includes(itemNumber) ?
                            <TitleWrapper part3>
                                {lesson.title7}
                            </TitleWrapper> :
                            part4.includes(itemNumber) &&
                            <TitleWrapper part4>
                                {lesson.title7}
                            </TitleWrapper>
            }
            {
                page == 8 & page != lesson.pages &&
                    part1.includes(itemNumber) ?
                    <TitleWrapper part1>
                        {lesson.title8}
                    </TitleWrapper> :
                    part2.includes(itemNumber) ?
                        <TitleWrapper part2>
                            {lesson.title8}
                        </TitleWrapper> :
                        part3.includes(itemNumber) ?
                            <TitleWrapper part3>
                                {lesson.title8}
                            </TitleWrapper> :
                            part4.includes(itemNumber) &&
                            <TitleWrapper part4>
                                {lesson.title8}
                            </TitleWrapper>
            }



            {
                page == lesson.pages &&
                    part1.includes(itemNumber) ?
                    <TitleWrapper part1>
                        {lesson.titleEnd}
                    </TitleWrapper> :
                    part2.includes(itemNumber) ?
                        <TitleWrapper part2>
                            {lesson.titleEnd}
                        </TitleWrapper> :
                        part3.includes(itemNumber) ?
                            <TitleWrapper part3>
                                {lesson.titleEnd}
                            </TitleWrapper> :
                            part4.includes(itemNumber) &&
                            <TitleWrapper part4>
                                {lesson.titleEnd}
                            </TitleWrapper>
            }
        </>
    )
}
