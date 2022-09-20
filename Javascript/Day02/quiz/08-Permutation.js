const checkPermute = function(stringOne, stringTwo) {
    stringOne = stringOne.split('') // convert to array
    stringTwo = stringTwo.split('') // convert to array
    // if different lengths, return false
    if(stringOne.length !== stringTwo.length) return false // bandingkan panjang array jika tidak terpenuhi return false
    // else sort and compare 
    if(stringOne.sort() === stringOne.sort()) return true // bandingkan array yg telah di sort jika sama return true
    // (doesnt matter how it's sorted, as long as it's sorted the same way)
  };
  

  console.log(checkPermute('aba', 'aab'))//true;
  console.log(checkPermute('aba', 'aaba'))//false;
  console.log(checkPermute('aba', 'aa'))//false;