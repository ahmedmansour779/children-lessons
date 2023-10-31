import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { useParams } from "react-router-dom";
import lessons, { lessonMaze, lessonPuzzle, lessonTrueOrFalse, lessonVideo } from "../../data/lessons";
import { CarouselCart, LessonContent } from "../../styles/lesson";
import Maze from '../maze/Maze';
import Puzzle from '../puzzle/Puzzle';
import RoundHouse from '../roundHouse';
import TrueOrFalse from '../trueOrFalse/TrueOrFalse';


export default function Content() {
    let { lessonId, lessonPage } = useParams();
    let itemNumber = +lessonId
    let page = +lessonPage;
    let lesson = lessons[itemNumber - 1]
    let roundHousePage = lesson.pages - 1

    return (
        <LessonContent>
            {
                page == 1 && !lessonVideo.includes(itemNumber) ?
                    <div style={{ width: "100%", margin: "1rem 0" }}>
                        <img style={{ width: "100%" }} src={lesson.imagePage1} />
                    </div> : null
            }
            {
                page == 1 && lessonVideo.includes(itemNumber) ?
                    <video controls style={{ width: "100%", margin: "1rem 0" }}>
                        <source src={lesson.imagePage1} alt="video" >
                        </source>
                    </video> : null
            }
            {
                page == 2 && page !== lesson.pages && page !== roundHousePage &&
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
                page == 3 && page !== lesson.pages && page !== roundHousePage &&
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
                page == 4 && page !== lesson.pages && page !== roundHousePage &&
                <div style={{ overflow: "hidden" }}>
                    <Carousel
                        slideSize={{ base: '100%', sm: '50%', md: '33.333333%', lg: '25%' }}
                        slideGap="xl"
                        controlsOffset="xs"
                        controlSize={27}
                        slidesToScroll={1}
                        withControls={true}
                        align="start"
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
            {
                page == 5 && page !== lesson.pages && page !== roundHousePage &&
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
                            lesson.imagePage5.map((value, i) => {
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
                page == 6 && page !== lesson.pages && page !== roundHousePage &&
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
                            lesson.imagePage6.map((value, i) => {
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
                page == 7 && page !== lesson.pages && page !== roundHousePage &&
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
                            lesson.imagePage7.map((value, i) => {
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
                page == roundHousePage &&
                <RoundHouse />
            }

            {/* game */}
            {
                page == lesson.pages & lessonMaze.includes(itemNumber) ?
                    <Maze /> :
                    page == lesson.pages & lessonPuzzle.includes(itemNumber) ?
                        <Puzzle /> :
                        page == lesson.pages & lessonTrueOrFalse.includes(itemNumber) ?
                            <TrueOrFalse /> : null
            }
        </LessonContent>
    )
}
