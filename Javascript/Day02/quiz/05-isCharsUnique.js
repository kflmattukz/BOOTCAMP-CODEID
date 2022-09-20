function isCharsUnique(string){
  let arrChars = string.split('');
  let isUniq = true

  // if (arrChars.length !== new Set(arrChars).size) {
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

console.log(isCharsUnique('abcdefg'), true);//true
console.log(isCharsUnique('abcdefga') , false);//false
console.log(isCharsUnique('abcdefgzx'), true);//true
console.log(isCharsUnique('abbcdefcgzdx'), false);//false