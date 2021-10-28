let sayi1 = 10;
sayi1 = "Ahmet"
let student = {id:1, name:"Ali"}
//console.log(student);

function save (puan=10,ogrenci) {
    console.log(ogrenci.name + " : " + puan)
}
//save(undefined,student);

let students = ["Engin Demiroğ","Ahmet Ulukaya", "Ali Ulukaya"]

//console.log (students);

let students2 = [student,{id:2, name:"Ahmet Ulukaya"},"Ankara",{city:"İstanbul"}]
//console.log (students2);

//rest  ----> GeriyeKalanlar Parametreler anlamında
//params  --> rest in C# daki karşılığı
//varArgs --> java daki karşılığı
let showProducts = function (id,...products) {
    console.log (id)
    console.log (products[0])
}

//console.log(typeof showProducts)
//showProducts(10,["Elma","Armut","Karpuz"])   ----> REST

//spread ---> ayrıştırmak demek
let point = [1,2,3,4,50,4,60,14]
console.log(...point)
console.log(Math.max(...point))
console.log(..."ABC","D",..."EFG","H")

//Destructuring ---> parçalamak demek.
let populations = [10000,20000,30000,[40000,10000]]
let [small,medium,hight,[veryHight,maximum]] = populations
console.log(small)
console.log(medium)
console.log(hight)
console.log(veryHight)
console.log(maximum)

function someFunction([small1],number) {
    
}

someFunction(populations)

let category = {id:1, name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)
