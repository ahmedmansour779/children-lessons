import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { useParams } from "react-router-dom";
import lessons from "../../data/lessons";
import { CarouselCart, LessonContent } from "../../styles/lesson";
import RoundHouse from '../roundHouse';


export default function Content() {
    let { lessonId, lessonPage } = useParams();
    let itemNumber = +lessonId
    let page = +lessonPage;
    let lesson = lessons[itemNumber - 1]
    return (
        <LessonContent>
            {
                page == 1 &&
                <div>
                    <img src={lesson.imagePage1} />
                </div>
            }
            {
                page == 2 && page !== lesson.pages &&
                <div style={{ overflow: "hidden" }}>
                    <Carousel
                        slideSize={{ base: '100%', sm: '50%', md: '33.333333%', lg: '25%' }}
                        slideGap="xl"
                        controlsOffset="xs"
                        controlSize={27}
                        slidesToScroll={1}
                        withControls={true}
                        dragFree>
                        {
                            lesson.imagePage2.map((value, i) => {
                                return (
                                    <Carousel.Slide key={i}>
                                        <CarouselCart>
                                            <img alt='image' src={`${value}`} />
                                        </CarouselCart>
                                    </Carousel.Slide>
                                )
                            })
                        }
                    </Carousel>
                </div>
            }
            {
                page == 3 && page !== lesson.pages &&
                <div style={{ overflow: "hidden" }}>
                    <Carousel
                        slideSize={{ base: '100%', sm: '50%', md: '33.333333%', lg: '25%' }}
                        slideGap="xl"
                        controlsOffset="xs"
                        controlSize={27}
                        slidesToScroll={1}
                        withControls={true}
                        dragFree>
                        {
                            lesson.imagePage3.map((value, i) => {
                                return (
                                    <Carousel.Slide key={i}>
                                        <CarouselCart>
                                            <img alt='image' src={`${value}`} />
                                        </CarouselCart>
                                    </Carousel.Slide>
                                )
                            })
                        }
                    </Carousel>
                </div>
            }
            {
                page == 4 && page !== lesson.pages &&
                <div style={{ overflow: "hidden" }}>
                    <Carousel
                        slideSize={{ base: '100%', sm: '50%', md: '33.333333%', lg: '25%' }}
                        slideGap="xl"
                        controlsOffset="xs"
                        controlSize={27}
                        slidesToScroll={1}
                        withControls={true}
                        dragFree>
                        {
                            lesson.imagePage4.map((value, i) => {
                                return (
                                    <Carousel.Slide key={i}>
                                        <CarouselCart>
                                            <img alt='image' src={`${value}`} />
                                        </CarouselCart>
                                    </Carousel.Slide>
                                )
                            })
                        }
                    </Carousel>
                </div>
            }

            {/* game */}
            {
                page == lesson.pages && <RoundHouse />
            }

            <>
                {/* <LessonWrapper>
                <Link style={{ color: "#332522" }} to={`/lesson/${lessonId - 1}`}><IconArrowBigLeftFilled /></Link>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <Link style={{ color: "#332522" }} to={`/lesson/${+lessonId + 1}`}><IconArrowBigRightFilled /></Link>
            </LessonWrapper> */}
            </>
        </LessonContent>
    )
}
