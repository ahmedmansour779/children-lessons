import { useParams } from "react-router-dom";
import lessons from "../../data/lessons";
import { ChoicesWrapper, Options } from "../../styles/choices";


export default function Puzzle() {
    let { lessonId } = useParams();
    let itemNumber = +lessonId
    let lesson = lessons[itemNumber - 1]
    return (

        <ChoicesWrapper>
            <Options>
                {
                    lesson.imagePuzzle.map((value, i) => {
                        return (
                            <div key={i}>
                                <img src={value} />
                            </div>
                        )
                    })
                }
            </Options>
        </ChoicesWrapper>

        // <PuzzleGameWrapper>
        //     {
        //         lesson.imagePuzzle1 &&
        //         <PuzzleGame>
        //             {/* option */}
        //             <PuzzleWrapper>
        //                 <PuzzleOptions>
        //                     {
        //                         gameArray.map((value, i) => {
        //                             return (
        //                                 <div style={{
        //                                     backgroundImage: `url(${lesson.imagePuzzle1})`,
        //                                     backgroundPosition: `${value}`,
        //                                     backgroundRepeat: "no-repeat",
        //                                     width: "19.1rem",
        //                                     height: "12.7rem"
        //                                 }} key={i} id={i + 1}
        //                                     draggable
        //                                     onDrag={handelDrag}
        //                                     onDragEnd={handelDragEnd}
        //                                 >
        //                                 </div>
        //                             )
        //                         })
        //                     }
        //                 </PuzzleOptions>
        //             </PuzzleWrapper>
        //             <PuzzleSpace>
        //                 {
        //                     gameArray.map((value, i) => {
        //                         return (
        //                             <div key={value} className={i + 1} onDragOver={handleDragOver} onDrop={handelDrop}>
        //                             </div>
        //                         )
        //                     })
        //                 }
        //             </PuzzleSpace>
        //         </PuzzleGame>
        //     }
        //     {
        //         lesson.imagePuzzle2 &&
        //         <PuzzleGame>
        //             {/* option */}
        //             <PuzzleWrapper>
        //                 <PuzzleOptions>
        //                     {
        //                         gameArray.map((value, i) => {
        //                             return (
        //                                 <div style={{
        //                                     backgroundImage: `url(${lesson.imagePuzzle2})`,
        //                                     backgroundPosition: `${value}`,
        //                                     backgroundRepeat: "no-repeat",
        //                                     width: "19.1rem",
        //                                     height: "12.7rem"
        //                                 }} key={i} id={i + 1}
        //                                     draggable
        //                                     onDrag={handelDrag}
        //                                     onDragEnd={handelDragEnd}
        //                                 >
        //                                 </div>
        //                             )
        //                         })
        //                     }
        //                 </PuzzleOptions>
        //             </PuzzleWrapper>
        //             <PuzzleSpace>
        //                 {
        //                     gameArray.map((value, i) => {
        //                         return (
        //                             <div key={value} className={i + 1} onDragOver={handleDragOver} onDrop={handelDrop}>
        //                             </div>
        //                         )
        //                     })
        //                 }
        //             </PuzzleSpace>
        //         </PuzzleGame>
        //     }
        //     {
        //         lesson.imagePuzzle3 &&
        //         <PuzzleGame>
        //             {/* option */}
        //             <PuzzleWrapper>
        //                 <PuzzleOptions>
        //                     {
        //                         gameArray.map((value, i) => {
        //                             return (
        //                                 <div style={{
        //                                     backgroundImage: `url(${lesson.imagePuzzle3})`,
        //                                     backgroundPosition: `${value}`,
        //                                     backgroundRepeat: "no-repeat",
        //                                     width: "19.1rem",
        //                                     height: "12.7rem"
        //                                 }} key={i} id={i + 1}
        //                                     draggable
        //                                     onDrag={handelDrag}
        //                                     onDragEnd={handelDragEnd}
        //                                 >
        //                                 </div>
        //                             )
        //                         })
        //                     }
        //                 </PuzzleOptions>
        //             </PuzzleWrapper>
        //             <PuzzleSpace>
        //                 {
        //                     gameArray.map((value, i) => {
        //                         return (
        //                             <div key={value} className={i + 1} onDragOver={handleDragOver} onDrop={handelDrop}>
        //                             </div>
        //                         )
        //                     })
        //                 }
        //             </PuzzleSpace>
        //         </PuzzleGame>
        //     }
        // </PuzzleGameWrapper>
    )
}
