import { dataTrueOrFalse } from "../../data/TrueOrFalse/data";
import { Options, Title } from "./style";


export default function TrueOrFalse() {
    const questions = (e) => {
        e.target.id == dataTrueOrFalse[0].trueImage ?
            console.log(true) :
            console.log(false)
    }

    return (
        <div>
            <Title>
                <p>
                    {dataTrueOrFalse[0].title}
                </p>
            </Title>
            <Options>
                {dataTrueOrFalse[0].allImage.map((value, i) => {
                    return (
                        <div key={i}>
                            <img src={value} id={i + 1} onClick={questions} />
                        </div>
                    )
                })}
            </Options>
        </div>
    )
}
