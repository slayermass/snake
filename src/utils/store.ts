import { snakeMovingSpeed, snakeStartPosition } from '../config';
import { GameFieldType, SnakeMovingDirection, SnakeType } from './types';

const store: {
  snakeMovingDirection: SnakeMovingDirection;
  isDebugEnabled: boolean;
  gameField: GameFieldType;
  snake: SnakeType;
  snakeMovingSpeed: number;
} = {
  get snakeMovingDirection() {
    // eslint-disable-next-line no-underscore-dangle
    return this._snakeMovingDirection;
  },
  set snakeMovingDirection(value: SnakeMovingDirection) {
    // eslint-disable-next-line no-underscore-dangle
    this._snakeMovingDirection = value;
  },

  get isDebugEnabled() {
    // eslint-disable-next-line no-underscore-dangle
    return this._isDebugEnabled;
  },
  set isDebugEnabled(value: boolean) {
    // eslint-disable-next-line no-underscore-dangle
    this._isDebugEnabled = value;
  },

  get gameField() {
    // eslint-disable-next-line no-underscore-dangle
    return this._gameField;
  },
  set gameField(value: GameFieldType) {
    // eslint-disable-next-line no-underscore-dangle
    this._gameField = value;
  },

  get snake() {
    // eslint-disable-next-line no-underscore-dangle
    return this._snake;
  },
  set snake(value: SnakeType) {
    // eslint-disable-next-line no-underscore-dangle
    this._snake = value;
  },

  get snakeMovingSpeed() {
    // eslint-disable-next-line no-underscore-dangle
    return this._snakeMovingSpeed;
  },
  set snakeMovingSpeed(value: number) {
    // eslint-disable-next-line no-underscore-dangle
    this._snakeMovingSpeed = +value.toFixed(1);
  },
};

/** initial store values */
store.snakeMovingDirection = snakeStartPosition;
store.isDebugEnabled = false;
store.gameField = [];
store.snake = [];
store.snakeMovingSpeed = snakeMovingSpeed;

export default store;
