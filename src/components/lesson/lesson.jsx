import { LessonContainer } from "../../styles/lesson";
import Audio from '../audio';
import Content from '../content';
import Footer from '../footer';
import Title from '../title';

export default function Lesson() {
    return (
        <LessonContainer>
            <Title />
            <Audio />
            <Content />
            <Footer />
        </LessonContainer>
    )
}