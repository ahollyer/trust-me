import * as ev from './eventHandlers';

console.log('Connected!');

let currentLevel = 1;
window.addEventListener('keydown', ev.handleKeyPress);
