/** ubah value string ke date 
 *  gunakan split
 *  inputan s = bulan/hari/tahun
*/


function strToDate(s){
  if (isNaN(Date.parse(s))) {
    return  s + ' bad format date';
  }
  date = new Date(s);
  return date.toString()
}

console.log(strToDate('12/30/2021'));//Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate('12/aa/bb')); //12/aa/bb bad format date