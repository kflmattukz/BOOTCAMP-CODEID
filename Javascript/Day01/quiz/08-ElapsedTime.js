/**
 * hitung detik ke dalam day, hour, minute and seconds
 */


function getPeriodTimes(seconds) {
  if (isNaN(seconds)) return seconds + ' is not number'
  
  seconds = Number(seconds);
  
  let d = Math.floor(seconds / (3600 * 24));
  let h = Math.floor(seconds % (3600 * 24) / 3600);
  let m = Math.floor(seconds % 3600 / 60);
  let s = Math.floor(seconds % 60);

  let dDisplay = d > 0 ? d + (d == 1 ? " day, " : " hari ") : "";
  let hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " jam ") : "";
  let mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " menit ") : "";
  let sDisplay = s > 0 ? s + (s == 1 ? " second" : " detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

console.log(getPeriodTimes("700005A"));//700005A is not number
console.log(getPeriodTimes("700005"));//8 hari 2 jam 26 menit 45 detik