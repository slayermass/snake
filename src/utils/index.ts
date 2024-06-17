import { getSnakeMovingDirection } from './store';
import { SnakeMovingDirection } from './types';

export const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * better name?
 */
export const getAddition = (
  pos: 'x' | 'y',
  number: number,
  direction: SnakeMovingDirection = getSnakeMovingDirection(),
) => {
  if (pos === 'x' && direction === 'horizontalTop') {
    return number;
  }
  if (pos === 'x' && direction === 'horizontalBottom') {
    return -number;
  }
  if (pos === 'y' && direction === 'verticalLeft') {
    return number;
  }
  if (pos === 'y' && direction === 'verticalRight') {
    return -number;
  }

  return 0;
};
