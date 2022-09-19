/**
 * Menghitung jarak kordinat
 * 𝑑 = √(𝑥1 − 𝑥2)^2 + (𝑦1 −𝑦2)^2
 */

function getCordinat(x1,y1,x2,y2) {
  x1 = Number(x1)
  x2 = Number(x2)
  y1 = Number(y1)
  y2 = Number(y2)

  // console.log(x1,x2,y1,y2)

  if (isNaN(x1) || isNaN(x2) || isNaN(y1) || isNaN(y2)) return 'input kordinat dalam angka'
  
  p1 = Math.pow(x1 - x2,2)
  p2 = Math.pow(y1 - y2,2)
  // p1 = Math.pow(x1,2) - Math.pow(x2,2)
  // p2 = Math.pow(y1,2) - Math.pow(y2,2)
  //console.log(p1, p2 , 'p1 dan p2')
  d = Math.sqrt(p1 + p2)

  return d
}

console.log(getCordinat(3,4,-4,-5)); //9
console.log(getCordinat("1","2","-1","-2")); //1
console.log(getCordinat("x","2","-y","-2")); //input kordinat dalam angka
console.log(getCordinat(3.2,4.5,-4.4,-5)); //13.695801445917125