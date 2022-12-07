// Zadatak 1. 
// Napisi program koji ovisno o varijabli time mogucih vrijednosti ZORA, JUTRO, POSLIJEPODNE, POPODNE, PRIJEPODNE, PREDVECER, NOC ispisuje Dobro jutro, Dobar dan ili Dobra vecer. Unos time varijable neka bude preko konzole, te ako korisnik nije unio ni jednu od mogucnosti neka ispis bude: Koje je to doba dana? Program napisi uz pomoc if-a i switch case-a. 

var time = process.argv[2]

if (time === "ZORA" || time === "JUTRO") {
    console.log("Dobro jutro")
} else if (time === "POSLIJEPODNE" || time === "POPODNE") {
    console.log("Dobar dan")
} else if (time === "PREDVECER" || time === "NOC") {
    console.log("Dobra vecer")
} else {
    console.log("Koje je to doba dana?")
}

switch (time) {
    case "ZORA":
    case "JUTRO":   
        console.log("Dobro jutro")
        break;
    case "POSLIJEPODNE":
    case "POPODNE":   
        console.log("Dobar dan")
        break;
    case "PREDVECER":
    case "NOC":   
        console.log("Dobra vecer")
        break;
    default:
        console.log("Koje je to doba dana?")
        break;
}


// Zadatak 2. 
// Napisi program koji omogucava unos proizvoljnog broja godina preko konzole, te napisi ternarni izraz koji bira vrijednosti MALOLJETAN i PUNOLJETAN. Potom za MALOLJETAN ispisi "Korisnik je maloljentan", a za punoljetan "Korisnik je punoljetan". Ako korisnik nije unio broj napisi "Pogresan unos!". 

var age = process.argv[2]

var MALOLJETAN = age < 18
var PUNOLJETAN = age >= 18

var adult = PUNOLJETAN ? "Korisnik je punoljetan" : MALOLJETAN ? "Korisnik je maloljentan" : "Pogresan unos!"

console.log(adult)


// Zadatak 3.
// Napisi program u kojem korisnik unosi broj preko konzole. Ako korisnik nije unio broj, program racuna da je korisnik unio broj 7. Program zatim ispisuje "Tvoj sretni broj je ___" i potom preko Math.random funkcije izvlaci cijeli broj od 0 do 9. Ukoliko je izvuceni broj identican korisnikovom sretnom broju ispisi "Jackpot!", a u suprotnom "Vise srece drugi put!". 

var input = process.argv[2]
var num = isNaN(input) ? 7 : input
console.log(`Tvoj sretni broj je ${num}`)

var lotteryNum = Math.round(Math.random() * 9)

var jackpot = num === lotteryNum ? "Jackpot!" : "Vise srece drugi put!"
console.log(jackpot)
