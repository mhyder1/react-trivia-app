import { useState, useEffect } from 'react';
// API - https://opentdb.com/api.php?amount=5&category=11&type=multiple
function App() {
  // create state to hold my quiz data
  const [quizData, setQuizData] = useState([]);
  const [score, setScore] = useState(0);
  const [formData, setFormData] = useState();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setQuizData(data.results));
  }, []);

  function handleChange(event) {
    const { name, value, dataset } = event.target;
    setFormData((prevFormData) => {
      // Set score if answer is true
      if (dataset.answer === 'true') {
        setScore(score + 1);
      }
      return {
        ...prevFormData,
        [name]: {
          answer: value,
          data: dataset.answer,
        },
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log('formData', formData);
    setSubmitted(true);
  }
  //map over quiz data to get questions
  const quizQuestions = quizData.map((quizItem, index) => {
    return (
      <div className="question-el">
        <h3 className="question-item">{quizItem.question}</h3>
        <div className="answer-item">
          <input
            id={quizItem.correct_answer}
            data-answer={true}
            type="radio"
            name={index}
            value={quizItem.correct_answer}
            onChange={handleChange}
          />
          <label htmlFor={quizItem.correct_answer}>
            {quizItem.correct_answer}
          </label>
        </div>
        <div className="answer-item">
          <input
            id={quizItem.incorrect_answers[0]}
            data-answer={false}
            type="radio"
            name={index}
            value={quizItem.incorrect_answers[0]}
            onChange={handleChange}
          />
          <label htmlFor={quizItem.incorrect_answers[0]}>
            {quizItem.incorrect_answers[0]}
          </label>
        </div>
        <div className="answer-item">
          <input
            id={quizItem.incorrect_answers[1]}
            className="answer-item"
            data-answer={false}
            type="radio"
            name={index}
            value={quizItem.incorrect_answers[1]}
            onChange={handleChange}
          />
          <label htmlFor={quizItem.incorrect_answers[1]}>
            {quizItem.incorrect_answers[1]}
          </label>
        </div>
        <div className="answer-item">
          <input
            id={quizItem.incorrect_answers[2]}
            className="answer-item"
            data-answer={false}
            type="radio"
            name={index}
            value={quizItem.incorrect_answers[2]}
            onChange={handleChange}
          />
          <label htmlFor={quizItem.incorrect_answers[2]}>
            {quizItem.incorrect_answers[2]}
          </label>
        </div>
      </div>
    );
  });

  return (
    <>
      <h1 className="page-title">Trivia Time</h1>
      <div className="quiz-el">
        <form onSubmit={handleSubmit}>
          {quizQuestions}
          {submitted ? (
            <>
              <button className="play-again-btn">Play Again</button>
              <h3 className="title">You scored {score}/5 correct answers</h3>
            </>
          ) : (
            <button type="submit" className="quiz-submit-btn">
              Check Answers
            </button>
          )}
        </form>
      </div>
    </>
  );
}

export default App;
