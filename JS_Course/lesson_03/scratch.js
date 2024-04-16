// if-else

if (uvjet1) {
    //kod koji se izvodi ako je uvjet1 true
}
else if (uvjet2){
    // kod koji se izvodi uvjet1 nije true, i uvjet2 je true
}
else {
    //lovi ako i uvjet1 i uvjet2 nisu true
}

//uvjet1 i uvjet2 mogu biti boolean variable, ali mogu bit i logicki izrazi nprr. (ime =='marko')
// kod logickih izraza operatori su:
// == provjerava jednakost po vrijednosti  1 == '1'-> ovo je true
// === provjerava je li vartijabla jednaka po vrijednosti i po tipu  1 === '1'-> false
// &&  spaja 2 varijable ili uvjeta s AND
// || spaja 2 varijable ili uvjeta s OR
// != provjerava nejednakost npr. 3!=5 -> True, 5!=5 -> false
// !== provjerava nejednakost po tipu i po vrijednosti

//PRIMJER
let a = 4
if (a>=5) {
    console.log('a>=5')
    //kod koji se izvodi ako je uvjet1 true
}
else if (a>=3){

    console.log('a<5')
    console.log('a>=3')
    // kod koji se izvodi uvjet1 nije true, i uvjet2 je true
}
else {
    console.log('a<3')
    //lovi ako i uvjet1 i uvjet2 nisu true
}


logicki izraz (a AND b) u programiranju se pise kao (a && b)

logicki izraz (a OR b) u programiranju se pise kao (a || b)

(a || (a && b))

(a || a && b) = (a || (a && b))

(a || a) = a
(a && a) = a 

//while petlju

let zbroj = 0;
let i = 1;


while(uvjet) {
    //KOD
}
//whikle izvodi kod dokle god je uvjet true, i kada vise nije true, izlazi

//Break komanda

break naredbu koristimo kada zelimo izaci iz petlje

while(true) {
    //kod
    if (i = 5){
        break;
    }
    zbroj = zbroj + i;
    i = i + 1;
}

//funkcije - mali program kojeg mozemo koristiti na vise mjesta

function zbroji(a, b){
    let c = a+b
    return c  //return je povrat iz funkcije
}

function isprintajPrvihDesetBrojeva() {
    let i = 1
    while(true){
        if (i = 10){
            break
        }
        console.log(i)
        i = i + 1
    }
}

let prvi = 3
let drugi = 4
let rezultat = zbroji(prvi, drugi)
console.log(rezultat)

isprintajPrvihDesetBrojeva()
let rezultat2 = zbroji(drugi, drugi)
console.log(rezultat2)

let funkcija = (a, b) => (a+b)
