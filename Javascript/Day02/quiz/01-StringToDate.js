/** ubah value string ke date 
 *  gunakan split
 *  inputan s = bulan/hari/tahun
*/
function strToDate(s){
  // if (isNaN(Date.parse(s))) return  s + ' bad format date'; 
  // console.log(split_date)
  if (isNaN(Date.parse(s))) {
    return  s + ' bad format date';
  }
  let [month,day,year] = s.split("/")
  // date = new Date(s)
  date = new Date(year,month -1 ,day); // -1 karna Date menggunakan 0 index base

  return date.toString() // return date string 
}

console.log(strToDate('12/30/2021'));//Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate('12/aa/bb')); //12/aa/bb bad format date