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

export const getGameField = (): ReadonlyArray<GameFieldType[0]> => JSON.parse(JSON.stringify(gameField));

export const setGameField = (newGameField: GameFieldType) => {
  gameField = JSON.parse(JSON.stringify(newGameField));
};
/** end gameField */

/** snakeMovingDirection */
let snakeMovingDirection: SnakeMovingDirection = snakeStartPosition;

export const setSnakeMovingDirection = (direction: SnakeMovingDirection): void => {
  snakeMovingDirection = direction;
};

export const getSnakeMovingDirection = (): SnakeMovingDirection => snakeMovingDirection;
/** end snakeMovingDirection */

/** debug */
let isDebugEnabled = false;

export const setIsDebugEnabled = (value: boolean) => {
  isDebugEnabled = value;
};

export const getIsDebugEnabled = () => isDebugEnabled;
/** end debug */
