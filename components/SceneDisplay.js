import { useState } from 'react';
import ClueItem from './ClueItem';
import Puzzle from './Puzzle';
import Link from 'next/link';

export default function SceneDisplay({ scene }) {
  const [foundClues, setFoundClues] = useState([]);
  const [puzzleSolved, setPuzzleSolved] = useState(false);

  const handleFindClue = (clue) => {
    if (!foundClues.find(c => c.id === clue.id)) {
      setFoundClues([...foundClues, clue]);
      alert(`Vous avez trouvé un indice : ${clue.text}`);
    } else {
      alert('Vous avez déjà trouvé cet indice.');
    }
  };

  return (
    <div>
      <h2>{scene.title}</h2>
      <p>{scene.description}</p>

      <h3>Indices :</h3>
      <ul>
        {scene.clues.map(clue => (
          <li key={clue.id}>
            <button onClick={() => handleFindClue(clue)} style={{ padding: '5px 10px', cursor: 'pointer' }}>
              Examiner cet endroit
            </button> - {foundClues.find(c => c.id === clue.id) ? <span style={{ color: 'green' }}>Trouvé !</span> : 'Non trouvé'}
          </li>
        ))}
      </ul>

      {scene.puzzle && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
          <h3>Énigme :</h3>
          <Puzzle puzzle={scene.puzzle} onPuzzleSolved={() => setPuzzleSolved(true)} />
        </div>
      )}

      {scene.nextScene && puzzleSolved && (
        <div style={{ marginTop: '20px' }}>
          <Link href={`/scene/${scene.nextScene}`} style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
            Passer à la scène suivante
          </Link>
        </div>
      )}
    </div>
  );
}