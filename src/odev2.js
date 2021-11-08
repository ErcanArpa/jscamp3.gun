function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
      let parameter = 0;
      for (let j = 1; j <= numbers[i] - 1; j++) {
        if (numbers[i] % j == 0) {
            parameter++;
        }
      }
  
      if (parameter == 1) {
        console.log(numbers[i] + "--Sayı Asaldır");
      } else {
        console.log(numbers[i] + "--Sayı Asal  Değildir");
      }
    }
  }
  findPrime(0.5, 2, 5, 8, 21, 13);


  /*arkadaş sayılar*/

function friends(number1, number2) {
    let total1 = 0
    let total2 = 0

    for (let i = 1; i < number1; i++) {
        if (number1 % i == 0) {
            total1 += i;
        }
    }
    for (let i = 0; i < number2; i++) {
        if (number2 % i == 0) {
            total2 += i
        }
    }
    if (total1 == number2 && total2 == number1) {
        console.log(number1 + " , " + number2 + " --arkadaş")
    } else {
        console.log(number1 + " , " + number2 + " --arkadaş değil")
    }
}
// friendNumbers= 220,284, 17296, 18416..



function perfectNumbers() {
    let number=1
    for(let number=1;number<=1000;number++){
        let total=0;
        for(let i=1;i<number;i++){
            if(number%i==0)
            total+=i
        }
        if(total==number)
        
        console.log(number);
    }    
}
perfectNumbers()

