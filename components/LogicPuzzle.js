import { useState } from 'react';

export default function LogicPuzzle({ puzzle, onPuzzleSolved }) {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    if (answer.trim() === puzzle.solution) {
      setFeedback(puzzle.successMessage);
      onPuzzleSolved(true);
    } else {
      setFeedback(puzzle.failureMessage);
    }
  };

  return (
    <div>
      <p>{puzzle.description}</p>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Votre réponse"
      />
      <button onClick={handleSubmit} style={{ marginLeft: '10px', padding: '5px 10px', cursor: 'pointer' }}>Vérifier</button>
      {feedback && <p>{feedback}</p>}
    </div>
  );
}