import './styles/index.scss';
import {gameSize} from './config';

const generateField = () => {
  const div = document.createElement('div');
  div.className = 'game';

  let children = '';

  for (let x = 0; x < gameSize; x++) {
    children += '<div class="row">';

    for (let y = 0; y < gameSize; y++) {
      children += '<div class="cell"></div>';
    }

    children += '</div>';
  }
  div.innerHTML = children;

  document.querySelector('#root')?.appendChild(div);
};

window.addEventListener('load', () => {
  generateField();
});
