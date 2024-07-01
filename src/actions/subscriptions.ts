import { moveSnake } from './snake';
import store from '../utils/store';

let timer: number | undefined;

export const subscribeMoveSnake = () => {
  clearTimeout(timer);

  timer = window.setTimeout(() => {
    window.requestAnimationFrame(moveSnake);

    subscribeMoveSnake();
  }, 1000 / store.snakeInitialMovingSpeed);
};

export const unsubscribeMoveSnake = () => {
  clearTimeout(timer);

  timer = undefined;
};

const arrowListener = ({ key }: KeyboardEvent) => {
  switch (key) {
    case 'ArrowUp':
      store.snakeMovingDirection = 'horizontalTop';

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
    case ' ':
      if (timer === undefined) {
        subscribeMoveSnake();
      } else {
        unsubscribeMoveSnake();
      }
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
