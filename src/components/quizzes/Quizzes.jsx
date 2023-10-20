export default function Quizzes() {
    const colors = [
        '#FF5733',
        '#FF8F33',
        '#FFC133',
        '#FFEC33',
        '#D1FF33',
        '#A5FF33',
        '#79FF33',
        '#4DFF33',
        '#33FF4D',
        '#33FF79',
        '#33FFA5',
        '#33FFD1',
    ];

    return (
        <div className="circle">
            {colors.map((color, index) => (
                <div key={index} className="part" style={{ backgroundColor: color }}></div>
            ))}
        </div>
    )
}
