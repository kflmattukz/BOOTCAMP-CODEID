import Product from "./Product.js";

const prod1 = new Product(1, "Samsung A1", "HP", 2500000, 3);
const prod2 = new Product(2, "UltraBook", "COMPUTER", 7850000, 2);
const prod3 = new Product(3, "Mesin Cuci LG", "ELECTRONIC", 3500000, 1);
const prod4 = new Product(4, "IPHONE", "HP", 6000000, 2);
const prod5 = new Product(5, "Asus Laptop", "COMPUTER", 6500000, 4);

let listCart = [prod1,prod2,prod3,prod4,prod5];

//console.log(prod1.price,prod1.totalBuy)
const totalTagihan = listCart.reduce((sum, acc) => sum + acc.subTotal(), 0)
// console.log(`Total Tagihan = ${totalTagihan}`);//Total Tagihan =64700000
console.log(`Total Tagihan = ${formatToRupiah(totalTagihan, 'IDR')}`);//Total Tagihan =64700000

const totalTagihanDiscount = (discount) => {
  // return totalTagihan - listCart.reduce((sum, acc) => sum + acc.getDiscount(discount),0)
  // console.log((totalTagihan / discount) * 100)
  return totalTagihan - ((totalTagihan * discount) / 100)
}
console.log(`Total Tagihan discount= ${formatToRupiah(totalTagihanDiscount(10), 'IDR')}`);//Total Tagihan discount=58580000 ? 58230000

console.log(listCart.map(product => product.toString()).join(''))

// Format currency IDR 'Indonesian Rupiah'
function formatToRupiah(amount, currency) {
  return new Intl.NumberFormat('ID', {style:'currency', currency: currency}).format(amount)
}