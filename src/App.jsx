import { useState, useEffect } from 'react';
import Inputs from './Inputs'
// API - https://opentdb.com/api.php?amount=5&category=11&type=multiple
function App() {
  // create state to hold my quiz data
  const [quizData, setQuizData] = useState([]);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState({})

  useEffect(() => {
    // fetch('data.json')
    fetch('https://opentdb.com/api.php?amount=5&category=11&type=multiple')
      .then((res) => res.json())
      .then((data) => setQuizData(data.results));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(selected)
    setSubmitted(true);
  }

  const quizQuestions = quizData.map((quizItem, index) => {
    return (
      <div className="question-el" key={index}>
        <h3 className="question-item">{quizItem.question}</h3>
          <Inputs 
            incorrect={quizItem.incorrect_answers}
            correct={quizItem.correct_answer}
            index={index}
            submitted={submitted}
            selected={selected}
            setSelected={setSelected}
            score={score}
            setScore={setScore}
          />
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
