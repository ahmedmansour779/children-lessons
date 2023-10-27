import { useParams } from "react-router-dom";
import lessons from "../../data/lessons";

export default function Audio() {
    let { lessonId, lessonPage } = useParams();
    let itemNumber = +lessonId
    let page = +lessonPage;
    let lesson = lessons[itemNumber - 1]
    return (
        <div style={{ display: "none" }}>
            {
                page == 1 && page !== lesson.pages && lesson.audio1 ?
                    <audio autoPlay>
                        <source src={lesson.audio1} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
            {
                page == 2 && page !== lesson.pages && lesson.audio2 ?
                    <audio autoPlay>
                        <source src={lesson.audio2} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
            {
                page == 3 && page !== lesson.pages && lesson.audio3 ?
                    <audio autoPlay>
                        <source src={lesson.audio3} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
            {
                page == 4 && page !== lesson.pages && lesson.audio4 ?
                    <audio autoPlay>
                        <source src={lesson.audio4} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
            {
                page == 5 && page !== lesson.pages && lesson.audio5 ?
                    <audio autoPlay>
                        <source src={lesson.audio5} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
            {
                page == 6 && page !== lesson.pages && lesson.audio6 ?
                    <audio autoPlay>
                        <source src={lesson.audio6} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
            {
                page == 7 && page !== lesson.pages && lesson.audio7 ?
                    <audio autoPlay>
                        <source src={lesson.audio7} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
            {
                page == 8 && page !== lesson.pages && lesson.audio8 ?
                    <audio autoPlay>
                        <source src={lesson.audio8} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
            {
                page == lesson.pages ?
                    <audio autoPlay>
                        <source src={lesson.audioEnd} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
        </div>
    )
}
