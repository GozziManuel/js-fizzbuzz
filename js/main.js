// Scrivo la formula che genera i numeri 1-100
let numStart = 0;
let numEnd = 100;
for (let i = numStart; i <= numEnd; i++) {
  //     SE multipli di 3 scrivere al posto del numero fizz
  if (i % 3 == 0) {
    console.log("fizz");
  } else {
    console.log(i);
  }
}

//     SE multipli di 5 scrivere buzz
//     SE multipli di entrambi scrivere fizzbuzz "fizz + buzz"
