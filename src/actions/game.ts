import { createNewBlockInRandomPlace } from './snake';
import store from '../utils/store';
import { createGameField, generateSnake, regenerateGameField, regenerateSnake, render } from './DOM';
import { subscribeOnArrows, unsubscribeMoveSnake, unsubscribeOnArrows } from './subscriptions';

export const startNewGame = (options?: { debug?: boolean }) => {
  store.isDebugEnabled = options?.debug || false;

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

  unsubscribeMoveSnake();

  // eslint-disable-next-line no-restricted-globals,no-alert
  if (confirm('Lose. Restart?')) {
    restartGame();
  }
};

export const winOfGame = () => {
  unsubscribeOnArrows();

  unsubscribeMoveSnake();

  // eslint-disable-next-line no-restricted-globals,no-alert
  if (confirm('Win. Restart?')) {
    restartGame();
  }
};
