import './styles/index.scss';

import { generateGameField, generateSnake } from './actions/DOM';
import { setSnakeMovingDirection } from './utils/store';
import { createNewBlockInRandomPlace, moveSnake } from './actions/snake';

const subscribeOnArrows = () => {
  window.addEventListener('keydown', (e) => {
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
  });
};

window.addEventListener('load', () => {
  generateGameField();

  generateSnake();

  subscribeOnArrows();

  createNewBlockInRandomPlace();
});
