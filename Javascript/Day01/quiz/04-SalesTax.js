/**
 * Hitung pajak dari total penjualan
 * function getSalesTax(price, tax)
 */

function getSalesTax(price, tax) {
  if (isNaN(price) && isNaN(tax))return 'Price & Pajak harus dalam angka'
  if (isNaN(price)) return 'Price harus dalam angka'
  if (isNaN(tax)) return 'pajak harus dalam angka'

  return `
  Total Sales : ${new Intl.NumberFormat('ID',{style:'currency',currency:'IDR'}).format(price)},
  Pajak: ${tax / 100},
  Total Harga + Pajak: ${new Intl.NumberFormat('ID',{style:'currency',currency:'IDR'}).format(price + (price * (tax / 100)))}
  `
}

console.log(getSalesTax("a", 1));//Price harus dalam angka
console.log(getSalesTax(500, "pajak"));//Price & Pajak harus dalam angka
console.log(getSalesTax("harga", "pajak"));//Pajak harus dalam angka
console.log(getSalesTax(4500, 5));
/**
 Total Sales : Rp.4500
 Pajak : 0.5
 TotalHarga+Pajak : Rp.4505
 
*/
