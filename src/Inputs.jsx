
export default function Inputs({ incorrect, correct, index, submitted, selected, setSelected, score, setScore }) {

    function handleChange(e) {
        console.log(correct)
        console.log(selected)
        if(e.target.dataset.correct === 'true') setScore(score + 1)
        setSelected(selected => ({
            ...selected,
            [e.target.name]: {
                answer: e.target.value,
                correct: e.target.dataset.correct,
                rightAnswer: correct
            }

        }))
    }
    function hilight(value) {
        // submited and selected and correct
        if (submitted && selected?.[index]?.answer === value && selected?.[index]?.correct === 'true') {
            return 'green';
        } else if (
            submitted &&
            selected?.[index]?.answer === value &&
            selected?.[index]?.correct === 'false'
        ) {
            // submitted and selected and incorrect
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
                    onChange={(e) => handleChange(e)}
                    data-correct={isCorrect(correct)}
                />
                <label htmlFor={correct} style={{ background: isCorrect(correct) && submitted ? 'green' : hilight(correct) }}>
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
                <label htmlFor={incorrect[0]} style={{ background: isCorrect(incorrect) && submitted ? 'green' : hilight(incorrect[0]) }}>
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
                <label htmlFor={incorrect[1]} style={{ background: isCorrect(incorrect) && submitted ? 'green' :  hilight(incorrect[1]) }}>
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
                <label htmlFor={incorrect[2]} style={{ background: isCorrect(incorrect) && submitted ? 'green' : hilight(incorrect[2]) }}>
                    {incorrect[2]}
                </label>
            </div>
        </>
    )
}