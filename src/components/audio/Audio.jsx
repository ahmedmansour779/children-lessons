import { useParams } from "react-router-dom";
import lessons, { lessonChoices, lessonDelivery, lessonDescription, lessonMaze, lessonPuzzle } from "../../data/lessons";

export default function Audio() {
    let { lessonId, lessonPage } = useParams();
    let itemNumber = +lessonId
    let page = +lessonPage;
    let lesson = lessons[itemNumber - 1]
    let roundHousePage = lesson.pages - 1

    return (
        <div style={{ display: "none" }}>
            {
                page == 1 && page !== lesson.pages && page !== roundHousePage && lesson.audio1 ?
                    <audio autoPlay>
                        <source src={lesson.audio1} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
            {
                page == 2 && page !== lesson.pages && page !== roundHousePage && lesson.audio2 ?
                    <audio autoPlay>
                        <source src={lesson.audio2} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
            {
                page == 3 && page !== lesson.pages && page !== roundHousePage && lesson.audio3 ?
                    <audio autoPlay>
                        <source src={lesson.audio3} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
            {
                page == 4 && page !== lesson.pages && page !== roundHousePage && lesson.audio4 ?
                    <audio autoPlay>
                        <source src={lesson.audio4} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
            {
                page == 5 && page !== lesson.pages && page !== roundHousePage && lesson.audio5 ?
                    <audio autoPlay>
                        <source src={lesson.audio5} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
            {
                page == 6 && page !== lesson.pages && page !== roundHousePage && lesson.audio6 ?
                    <audio autoPlay>
                        <source src={lesson.audio6} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
            {
                page == 7 && page !== lesson.pages && page !== roundHousePage && lesson.audio7 ?
                    <audio autoPlay>
                        <source src={lesson.audio7} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
            {
                page == 8 && page !== lesson.pages && page !== roundHousePage && lesson.audio8 ?
                    <audio autoPlay>
                        <source src={lesson.audio8} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
            {
                page == lesson.pages && lessonChoices.includes(itemNumber) ?
                    <audio autoPlay>
                        <source src={lesson.choiceAudio} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
            {
                page == lesson.pages && lessonMaze.includes(itemNumber) ?
                    <audio autoPlay>
                        <source src={lesson.audioMaze} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
            {
                page == lesson.pages && lessonDelivery.includes(itemNumber) ?
                    <audio autoPlay>
                        <source src={lesson.deliveryAudio} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
            {
                page == lesson.pages && lessonPuzzle.includes(itemNumber) ?
                    <audio autoPlay>
                        <source src={lesson.coloringAudio} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
            {
                page == lesson.pages && lessonDescription.includes(itemNumber) ?
                    <audio autoPlay>
                        <source src={lesson.descriptionAudio} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
            {
                page == roundHousePage ?
                    <audio autoPlay>
                        <source src={lesson.audioEnd} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
        </div>
    )
}
