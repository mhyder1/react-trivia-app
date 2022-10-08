import { useState, useEffect } from 'react';
// API - https://opentdb.com/api.php?amount=5&category=11&type=multiple
function App() {
  // create state to hold my quiz data
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setQuizData(data.results));
  }, []);

  //console.log(quizData);

  function handleClick(event) {
    console.log('answer clicked', event.target);
  }

  //map over quiz data to get questions
  const quizQuestions = quizData.map((quizItem) => {
    return (
      <div className="question-el">
        <h2 className="question-item">{quizItem.question}</h2>
        <ul className="answers-el">
          <li className="answers-item" onClick={handleClick}>
            {quizItem.correct_answer}
          </li>
          <li className="answers-item" onClick={handleClick}>
            {quizItem.incorrect_answers[0]}
          </li>
          <li className="answers-item" onClick={handleClick}>
            {quizItem.incorrect_answers[1]}
          </li>
          <li className="answers-item" onClick={handleClick}>
            {quizItem.incorrect_answers[2]}
          </li>
        </ul>
      </div>
    );
  });

  return (
    <>
      <h1 className="page-title">Trivia Time</h1>
      <div className="quiz-el">
        {quizQuestions}
        <button className="quiz-submit-btn">Check Answers</button>
      </div>
    </>
  );
}

export default App;
