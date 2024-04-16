// Arrays ilitiga Polja

let voce = [ 'jabuka' , 'banana', 'visnja' ]
let povrce = ['zelje', 'brokula' ]
let hrana = [ voce, povrce]

console.log(hrana)

[ [ 'jabuka' , 'banana', 'visnja' ],  ['zelje', 'brokula' ] ]

console.log(voce[0])

'jabuka'

console.log(povrce[2])

undefined

console.log(hrana[1])

['zelje', 'brokula' ]

console.log(hrana[0][2])

'visnja'


let polje = [ 
    true, //[0]
    'rijec', //[1]
    'broj', //[2]
    1 , //[3]
    false //[4]
]

//dulji nacin mijenjanja vrijednosti

voce = ['jabuka', 'naranca', 'visnja']

// kraci nacin

voce[1] = 'naranca'

// Detaljna lista metoda nad arrayima: https://javascript.info/array

//Objekti

let osoba = {
    ime: "natan",
    visina: 186,
    tezina: 80,
    nacionalnost: "hrvat",
}

console.log(osoba[0])

ReferenceError

imeObjekta.imeSvojstva  -> nacin za izvuci vrijednost imeSvojstva

console.log(osoba.ime)

"natan"

console.log(osoba.tezina)

80

//Promjena vrijednosti svojstva i dodavanje i micanje svojstva u objektima
osoba.ime = 'niko'

osoba.del(nacionalnost)

console.log(osoba)

{
    ime: "niko",
    visina: 186,
    tezina: 80
}

osoba.bojaOciju = 'smeda'

console.log(osoba)

{
    ime: "niko",
    visina: 186,
    tezina: 80,
    bojaOciju: 'smeda'
}


// Petlje





// Koja je razlika izmedu metode i funkcije?
// Metoda se koristi pomocu sljedeceg nacina pisanja (sintakse): objekt.imeMetode(Argumenti)
// Funkcija se koristi pomocu ove sintakse: imeFunkcije(Argumenti)
// Metode su funkcije, koje su definirane samo nad tom vrstom objekta

//Metoda .del 
// Objekt1.del(String) Vraca Objekt2
// Da bi .del radio, Objekt1 mora posjedovati svojstvo naziva String i vraca Objekt2, koji je jednak Objektu1 samo bez svojstva String


