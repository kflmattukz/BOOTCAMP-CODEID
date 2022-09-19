/**
 * hitung orang yg memiliki berat badan paling tinggi
 */

function getHeavier(w1,wg2,wg3){
  const sortHeavi = [w1,wg2,wg3].sort().reverse()
  return sortHeavi[0]
}

console.log(getHeavier(12,45,70));//70