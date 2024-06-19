import { moveSnake } from './snake';
import { setSnakeMovingDirection } from '../utils/store';

const arrowListener = (e: KeyboardEvent) => {
  switch (e.key) {
    case 'ArrowUp':
      setSnakeMovingDirection('horizontalTop');
      moveSnake();
      break;
    case 'ArrowDown':
      setSnakeMovingDirection('horizontalBottom');
      moveSnake();
      break;
    case 'ArrowLeft':
      setSnakeMovingDirection('verticalLeft');
      moveSnake();
      break;
    case 'ArrowRight':
      setSnakeMovingDirection('verticalRight');
      moveSnake();
      break;
    default:
      break;
  }
};

export const subscribeOnArrows = () => {
  window.addEventListener('keydown', arrowListener);
};

export const unsubscribeOnArrows = () => {
  window.removeEventListener('keydown', arrowListener);
};
