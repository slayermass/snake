import { snakeStartPosition } from '../config';
import { GameFieldType, SnakeMovingDirection, SnakeType } from './types';

export const gameField: GameFieldType = [];

export const snake: SnakeType = [];

let snakeMovingDirection: SnakeMovingDirection = snakeStartPosition;

export const setSnakeMovingDirection = (direction: SnakeMovingDirection): void => {
  snakeMovingDirection = direction;
};

export const getSnakeMovingDirection = (): SnakeMovingDirection => snakeMovingDirection;
