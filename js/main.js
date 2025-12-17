// Scrivo la formula che genera i numeri 1-100
let numStart = 0;
let numEnd = 100;
const styleFizz = "background-color: red; color: black; font-size: 20px";
const styleFizzBuzz = "background-color: green; color: black; font-size: 20px";
const styleBuzz = "background-color: blue; color: black; font-size: 20px";

for (let i = numStart; i <= numEnd; i++) {
  //     SE multipli di entrambi scrivere fizzbuzz "fizz + buzz"
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("%cFizzBuzz", styleFizzBuzz);
    //     SE multipli di 5 scrivere buzz
  } else if (i % 5 == 0) {
    console.log("%cBuzz", styleBuzz);
    //     SE multipli di 3 scrivere al posto del numero fizz
  } else if (i % 3 == 0) {
    console.log("%cFizz", styleFizz);
  } else {
    console.log(i);
  }
}
