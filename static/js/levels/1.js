/******************************************************************************
                                    LEVEL 1
******************************************************************************/

  ///////////////////////////////
 // It wants you to press 'A' //
///////////////////////////////

function checkKey(keyPressed) {
  if(keyPressed === 65) {
    console.log('Good');
  } else {
    console.log('Nope');
  }
}

export default checkKey;
