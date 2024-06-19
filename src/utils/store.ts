import { snakeStartPosition } from '../config';
import { GameFieldType, SnakeMovingDirection, SnakeType } from './types';

/** snake */
let snake: SnakeType = [];

export const getSnake = () => snake;

export const setSnake = (newSnake: SnakeType) => {
  snake = newSnake;
};
/** end snake */

/** gameField */
let gameField: GameFieldType = [];

export const getGameField = () => gameField;

export const setGameField = (newGameField: GameFieldType) => {
  gameField = newGameField;
};
/** end gameField */

/** snakeMovingDirection */
let snakeMovingDirection: SnakeMovingDirection = snakeStartPosition;

export const setSnakeMovingDirection = (direction: SnakeMovingDirection): void => {
  snakeMovingDirection = direction;
};

export const getSnakeMovingDirection = (): SnakeMovingDirection => snakeMovingDirection;
