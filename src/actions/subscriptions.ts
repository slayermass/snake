import { moveSnake } from './snake';
import store from '../utils/store';

let timer: number | undefined;

export const subscribeMoveSnake = () => {
  clearTimeout(timer);

  timer = window.setTimeout(() => {
    window.requestAnimationFrame(moveSnake);

    subscribeMoveSnake();
  }, 1000 / store.snakeMovingSpeed);
};

export const unsubscribeMoveSnake = () => {
  clearTimeout(timer);
};

const arrowListener = (e: KeyboardEvent) => {
  switch (e.key) {
    case 'ArrowUp':
      store.snakeMovingDirection = 'horizontalTop';
      if (timer === undefined) {
        subscribeMoveSnake();
      }
      break;
    case 'ArrowDown':
      store.snakeMovingDirection = 'horizontalBottom';
      break;
    case 'ArrowLeft':
      store.snakeMovingDirection = 'verticalLeft';
      break;
    case 'ArrowRight':
      store.snakeMovingDirection = 'verticalRight';
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
