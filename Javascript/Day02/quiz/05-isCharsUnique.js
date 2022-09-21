function isCharsUnique(string){
  let arrChars = string.split('');
  let isUniq = true

  // if (arrChars.length !== new Set(arrChars).size) { //Set().Size return total uniq value dalam  array
  //   return true;
  // }
  // return false;
  
  for (let i = 0; i < arrChars.length; i++) {
    for (let j = 0; j < arrChars.length; j++) {
      if (i == j) continue 
      //console.log(arrChars[i], arrChars[j])
      if(arrChars[i] === arrChars[j]) isUniq = false
    }
  }
  return isUniq
}

console.log(isCharsUnique('abcdefg'));//true
console.log(isCharsUnique('abcdefga'));//false
console.log(isCharsUnique('abcdefgzx'));//true
console.log(isCharsUnique('abbcdefcgzdx'));//false