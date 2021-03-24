console.log('js ok')

//Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero 
//e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

//Prima di partire a scrivere codice poniamoci qualche domanda: 
//come faccio a sapere se un numero è divisibile per? Abbiamo visto qualcosa di particolare che possiamo usare?

//stampa un numero da 1 a 100

// var number;

// for (var i = 1; i <= 100; i++) {
//     // console.log(number = i);

//     if (i % 3 == 0) {
//         console.log(number = 'Fizz');

//     } else if ((i % 5 == 0) || (i % 5 == 5)) {
//         console.log(number = 'Buzz');

//     } else if ((i % 3 == 0) && ((i % 5 == 0) || (i % 5 == 5))) {
//          console.log(number = 'FizzBuzz');

//     } else {
//         console.log(number = i);
//     }
// }

// var number;

//  for (var i = 1; i <= 100; i++) {
//      // console.log(number = i);

//     if ((i % 3 == 0) && ((i % 5 == 0) || (i % 5 == 5))) {
//         console.log(number = 'FizzBuzz');

//     } else if (i % 3 == 0) {
//         console.log(number = 'Fizz')

//     } else if ((i % 5 == 0) || (i % 5 == 5)) {
//         console.log(number = 'Buzz')
//     }
//      else {
//         console.log(number = i)
//     }

// }






var number;

 for (var i = 1; i <= 100; i++) {
     // console.log(number = i);

    if (i % 15 == 0) {
        console.log(number = 'FizzBuzz');

    } else if (i % 3 == 0) {
        console.log(number = 'Fizz')

    } else if (i % 5 == 0) {
        console.log(number = 'Buzz')
    }
     else {
        console.log(number = i)
    }

}