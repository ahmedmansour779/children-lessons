import { useParams } from "react-router-dom";
import lessons from "../../data/lessons";
import { part1, part2, part3, part4 } from "../../data/parts";
import { TitleWrapper } from "../../styles/title";

export default function Title() {
    let { lessonId, lessonPage } = useParams();
    let itemNumber = +lessonId
    let page = lessonPage;
    let lesson = lessons[itemNumber - 1]
    return (
        <>
            {
                page == 1 ?
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
                                </TitleWrapper> : null
            }
            {
                page == 2 ?
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
                                </TitleWrapper> : null
            }
            {
                page == 3 && page !== lesson.pages && lesson.title3 ?
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
                                </TitleWrapper> : null
            }
            {
                page == 4 && page !== lesson.pages && lesson.title4 ?
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
                                </TitleWrapper> : null
            }
            {
                page == 5 & page != lesson.pages && lesson.title5 ?
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
                                </TitleWrapper> : null
            }
            {
                page == 6 & page != lesson.pages && lesson.title6 ?
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
                                </TitleWrapper> : null
            }
            {
                page == 7 & page != lesson.pages && lesson.title7 ?
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
                                </TitleWrapper> : null
            }
            {
                page == 8 & page != lesson.pages && lesson.title8 ?
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
                                </TitleWrapper> : null
            }



            {
                page == lesson.pages ?
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
                                </TitleWrapper> : null
            }
        </>
    )
}
