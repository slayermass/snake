import { moveSnake } from './snake';
import store from '../utils/store';

const arrowListener = (e: KeyboardEvent) => {
  switch (e.key) {
    case 'ArrowUp':
      store.snakeMovingDirection = 'horizontalTop';
      moveSnake();
      break;
    case 'ArrowDown':
      store.snakeMovingDirection = 'horizontalBottom';
      moveSnake();
      break;
    case 'ArrowLeft':
      store.snakeMovingDirection = 'verticalLeft';
      moveSnake();
      break;
    case 'ArrowRight':
      store.snakeMovingDirection = 'verticalRight';
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
