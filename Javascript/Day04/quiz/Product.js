export default class Product{
    constructor(prodId,prodName, category, price=0,totalBuy=1){
        this.prodId = prodId
        this.prodName = prodName
        this.category = category
        this.price = price
        this.totalBuy = totalBuy
    }

    setPrice(price){
        this.price = price
    }

    setTotalBuy(total){
        this.totalBuy = total
    }

    subTotal() {
        return this.price * this.totalBuy
    }

    getDiscount(discount) {
        return (this.subTotal() * discount) / 100
    }

    getFormatPrice() {
        return new Intl.NumberFormat('ID', {style:'currency', currency: 'IDR'}).format(this.price)
    }

    toString(){
        return `
        Prod ID     : ${this.prodId}
        Prod Name   : ${this.prodName}
        Category    : ${this.category}
        Price       : ${this.getFormatPrice()} 
        Total Buy   : ${this.totalBuy}
        `
    }

}