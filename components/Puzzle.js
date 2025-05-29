import TextPuzzle from './TextPuzzle';
import LogicPuzzle from './LogicPuzzle';

export default function Puzzle({ puzzle, onPuzzleSolved }) {
  switch (puzzle.type) {
    case 'text':
      return <TextPuzzle puzzle={puzzle} onPuzzleSolved={onPuzzleSolved} />;
    case 'logic':
      return <LogicPuzzle puzzle={puzzle} onPuzzleSolved={onPuzzleSolved} />;
    default:
      return <p>Type d'énigme inconnu.</p>;
  }
}