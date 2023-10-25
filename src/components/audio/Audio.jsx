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
                page == 1 ?
                    <audio autoPlay>
                        <source src={lesson.audio1} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
            {
                page == 2 ?
                    <audio autoPlay>
                        <source src={lesson.audio2} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
            {
                page == 3 ?
                    <audio autoPlay>
                        <source src={lesson.audio3} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
            {
                page == 4 ?
                    <audio autoPlay>
                        <source src={lesson.audio4} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
            {
                page == 5 ?
                    <audio autoPlay>
                        <source src={lesson.audio5} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
            {
                page == 6 ?
                    <audio autoPlay>
                        <source src={lesson.audio6} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
            {
                page == 7 ?
                    <audio autoPlay>
                        <source src={lesson.audio7} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
            {
                page == 8 ?
                    <audio autoPlay>
                        <source src={lesson.audio8} type="audio/ogg; codecs=opus" />
                    </audio> : null
            }
        </div>
    )
}
