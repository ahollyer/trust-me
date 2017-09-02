/*********** Levels *************/
import * as lvl1 from './levels/1';

function handleKeyPress(e) {
  switch(currentLevel) {
    case 1:
      lvl1.checkKey(e.keyCode);
      break;
    default:
      console.log('Nuh uh');
      break;
  }
}

export default handleKeyPress;
