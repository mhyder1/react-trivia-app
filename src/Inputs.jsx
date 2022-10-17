
export default function Inputs({ incorrect, correct, index, submitted, selected, setSelected, score, setScore }) {

    function handleChange(e) {
        if(e.target.dataset.correct === 'true') setScore(score + 1)
        setSelected({
            ...selected,
            [e.target.name]: {
                answer: e.target.value,
                correct: e.target.dataset.correct
            }

        })
    }
    function hilight(value) {
        if (submitted && selected?.[index].answer === value && selected?.[index].correct === 'true') {
            return 'green';
        } else if (
            submitted &&
            selected?.[index].answer === value &&
            selected?.[index].correct === 'false'
        ) {
            return 'red';
        }
    }

    function isCorrect(value) {
        return typeof value === 'string' ? true : false
    }

    return (
        <>
            <div className="answer-item">
                <input
                    id={correct}
                    type="radio"
                    name={index}
                    value={correct}
                    onChange={handleChange}
                    data-correct={isCorrect(correct)}
                />
                <label htmlFor={correct} style={{ background: hilight(correct) }}>
                    {correct}
                </label>
            </div>
            <div className="answer-item">
                <input
                    id={incorrect[0]}
                    type="radio"
                    name={index}
                    value={incorrect[0]}
                    onChange={handleChange}
                    data-correct={isCorrect(incorrect)}
                />
                <label htmlFor={incorrect[0]} style={{ background: hilight(incorrect[0]) }}>
                    {incorrect[0]}
                </label>
            </div>
            <div className="answer-item">
                <input
                    id={incorrect[1]}
                    type="radio"
                    name={index}
                    value={incorrect[1]}
                    onChange={handleChange}
                    data-correct={isCorrect(incorrect)}
                />
                <label htmlFor={incorrect[1]} style={{ background: hilight(incorrect[1]) }}>
                    {incorrect[1]}
                </label>
            </div>
            <div className="answer-item">
                <input
                    id={incorrect[2]}
                    type="radio"
                    name={index}
                    value={incorrect[2]}
                    onChange={handleChange}
                    data-correct={isCorrect(incorrect)}
                />
                <label htmlFor={incorrect[2]} style={{ background: hilight(incorrect[2]) }}>
                    {incorrect[2]}
                </label>
            </div>
        </>
    )
}