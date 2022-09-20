function maxWordLength(params) {
  let kalimat = params.split(' ') // split per kata
    .sort((a,b) => a.length - b.length); // sort dengan menbandingkan panjang kata
  return kalimat[kalimat.length -1] // return kata pling akhir array yg sudah di sort
}

console.log(maxWordLength("aku suka bootcamp sentul city"));//bootcamp