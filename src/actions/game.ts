import { createNewBlockInRandomPlace } from './snake';
import { setIsDebugEnabled } from '../utils/store';
import { createGameField, generateSnake, regenerateGameField, regenerateSnake, render } from './DOM';
import { subscribeOnArrows, unsubscribeOnArrows } from './subscriptions';

export const startNewGame = (options?: { debug?: boolean }) => {
  setIsDebugEnabled(options?.debug || false);

  createGameField();

  generateSnake();

  createNewBlockInRandomPlace();

  subscribeOnArrows();
};

export const restartGame = () => {
  unsubscribeOnArrows();

  subscribeOnArrows();

  regenerateGameField();

  regenerateSnake();

  createNewBlockInRandomPlace();

  render();
};

export const endOfGame = () => {
  unsubscribeOnArrows();

  // eslint-disable-next-line no-restricted-globals,no-alert
  if (confirm('Lose. Restart?')) {
    restartGame();
  }
};

export const winOfGame = () => {
  unsubscribeOnArrows();

  // eslint-disable-next-line no-restricted-globals,no-alert
  if (confirm('Win. Restart?')) {
    restartGame();
  }
};
