// 1. Chiedo all'utente i kilometri
// 2. Chiedo all'utente l'età
// 3. Dichiaro un prezzo al kilometro
// 4. Moltiplico il prezzo al chilometro per i kilometri e ottengo il prezzo della corsa
// 5. SE l'utente è minorenne
//     1. Sottraggo il 21% dal prezzo intero
// 6. ALTRIMENTI SE l'utente è over 65
//     1. Sottraggo il 41% dal prezzo intero
// 7. Stampo il prezzo finale


const userDistance=prompt('write how many km you want to travel');
const userAge=prompt('type your Age');
const priceCost= 0.276;

let tripCost = userDistance * priceCost;
let userPrice
if(userAge < 18){
    userPrice = (tripCost / 100) * 21
} else if(userAge > 65){
    userPrice = (tripCost / 100) * 42
}


// console.log(tripCost);
document.getElementById('output').innerHTML= (userPrice).toFixed(2);
