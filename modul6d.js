// задание 1

function sortElementArray () {
    let arr = [1, 2, 0, 3, 4, 5, 0, 0, 6]
    let odd = 0;
    let even = 0;
    let zero = 0;

    for(i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'number' && !isNaN(arr[i])) {
        if(arr[i] % 2 == 0 && arr[i] !== 0) {
         even++;
     } else if (arr[i] % 2 !== 0 && arr[i] !== 0) {
      odd++;
    } else if (arr[i] == 0) {
      zero++;
    }
  }
}
console.log(`Чётных элементов: ${even}`);
console.log(`Нечетных элементов: ${odd}`);
console.log(`Нулевых элементов: ${zero}`);
}

sortElementArray ();

// задание 2

function checkPrimeNum(num) {
    if(num > 1000 || num == 0 || num == 1 || typeof num != 'number') {
      alert('Данные неверны')
    } else {
      for(let i = 2; i <= num; i++) {
        if(num % i === 0) {
          return `${num} - составное число`;
        } else {
          return `${num} - простое число`;
        }
      }
    }
  }
  alert(checkPrimeNum(149));

//задание 3

function getSum(num1) {
  
 return function (num2) { 
   return num1 + num2;
 }
}
console.log(getSum(2)(3));

//задание 4

function counter(go, stop) {

  let intervalEnd = setInterval(() => {
      console.log(go++);
     if(go > stop){
      clearInterval(intervalEnd);
    }
  },1000);
}
counter(1, 5);

// задание 5

let exponentiation = (x, n) => {
  let result = Math.pow(x, n) ;
  return result;
}
console.log(exponentiation(2,7));

 