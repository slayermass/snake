import { snakeStartPosition } from '../config';

export type GameFieldType = number[][]; // see BlockType

export type SnakeType = [number, number][];

export type SnakeMovingDirection = typeof snakeStartPosition;

export const enum BlockType {
  'empty',
  'food',
  'snake',
  'snakeHead',
}
