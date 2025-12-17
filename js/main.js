// Scrivo la formula che genera i numeri 1-100
let numStart = 0;
let numEnd = 100;
let fizz = "fizz";
let buzz = "buzz";
let fizzbuzz = fizz + buzz;
for (let i = numStart; i <= numEnd; i++) {
  //     SE multipli di entrambi scrivere fizzbuzz "fizz + buzz"
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(fizzbuzz);
    //     SE multipli di 5 scrivere buzz
  } else if (i % 5 == 0) {
    console.log(buzz);
    //     SE multipli di 3 scrivere al posto del numero fizz
  } else if (i % 3 == 0) {
    console.log(buzz);
  } else {
    console.log(i);
  }
}
