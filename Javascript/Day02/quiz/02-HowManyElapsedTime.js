/** berapa banyak tahun kabisat antara tahun1 ke tahun2 */

function howManyKabisat(year1,year2){

  if(isNaN(Date.parse(year1)) || isNaN(Date.parse(year2))) return 'masukkan tahun dalam bentuk angka'
  let totalTahunKabisat = 0
  let totalTahunNonKabisat = 0
  let arrKabisat = []
  let arrNotKabisat = []

  while(year1 <= year2) {
    if (isKabisat(year1)) {
      // console.log(year1 + ' adalah tahun kabisat')
      arrKabisat.push(year1)
      totalTahunKabisat++
    } else {
      // console.log(year1 + ' bukan tahun kabisat')
      arrNotKabisat.push(year1)
      totalTahunNonKabisat++
    }
    year1++;
  }
  return 'Total Tahun kabisat : ' + totalTahunKabisat + ' yaitu ' + arrKabisat + '\nTotal Tahun Non Kabisat : ' + totalTahunNonKabisat + ' yaitu ' + arrNotKabisat;
}

function isKabisat(year){
  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    return true // kembalikan true jika  kabisat
  } else {
    return false // kembalikan false jika bukan kabisat
  }
}

console.log(howManyKabisat(1997,2021));
console.log(howManyKabisat(1997,'2b21'));