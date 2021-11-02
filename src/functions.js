function addToCart(quantitity,productName="Elma") {
    console.log("Sepete eklendi : ürün : "+ productName+ " adet : "+quantitity) 
}

//addToCart()
addToCart(10)
//addToCart(15)


let sayHello = () =>{
    console.log("Hello World!")
} 

sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
}

sayHello2();

function addToCart2(productName, quantitity, unitPrice) {
        
}

addToCart2("Elma", 5, 10)
addToCart2("Armut", 2, 20)
addToCart2("Limon", 3, 15)

let product1 = {productName: "Elma", unitPrice: 10, quantitity:5}

function  addToCart3(product) {     // !!!!!********||"01:04:44"||********!!!!!
    console.log("ürün : "+product.productName)
    console.log("Adet : "+product.quantitity)
    console.log("Fiyat : "+product.unitPrice)
}


addToCart3(product1)

let product2 = {productName: "Elma", unitPrice: 10, quantitity:5}
let product3 = {productName: "Elma", unitPrice: 10, quantitity:5}
product2 = product3
product2.productName = "KarpuZZ % & ½"
console.log(product3.productName)    // !!!!!********||"01:15:20"||********!!!!!

let sayi1 = 10     //karpuzu anlayalım !!! Değer ve Referans tip kavramı söz konusu.....--->
let sayi2 = 20     // --->....özellike sayılsa veriler
sayi1 = sayi2      // Sayısal veriler = Değer tip, Obje/Array veriler = Referans tiptir.
sayi2 = 100        // ***||"01:21:00"||***  Stack-Heap ********!!!!!
console.log(sayi1)

function addToCart4(products) {
    console.log(products) 
}

let products = [
    {productName: "Elma", unitPrice: 10, quantitity:5},
    {productName: "Armut", unitPrice: 10, quantitity:5},
    {productName: "Karpuz", unitPrice: 10, quantitity:5}
]

addToCart4(products)

function add(bisey,...numbers) {   // fonksiyon içerisinde, değişken önünde, üç nokta REST OPERATÖRÜ
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers [i]
    }
    console.log(total)  
    console.log(bisey)  
}
add(20,30)
//add(20,30,40)
//add(20,30,40,50)

let numbers =[30,10,500,600,120]
//console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,icAnadoluSehirleri] = [
    {name: "İç Anadolu", population : "20M"}, 
    {name: "Marmara", population : "30M"},
    {name: "Karadeniz", population : "10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

//console.log(icAnadolu.name)
//console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName: newProductName, unitPrice:newUnitPrice, quantity:newQuantity} 
= {productName: "Elma", unitPrice: 10, quantitity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)





