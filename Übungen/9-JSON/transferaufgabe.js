class Buch {
    constructor( titel, autor, veroeffentlichungsjahr, genre) {
        this.titel= titel;
        this.autor= autor;
        this.veroeffentlichungsjahr= veroeffentlichungsjahr;
        this.genre= genre
    }
    buchInString() {
        const buchInString= JSON.stringify(this);
        console.log(buchInString);
    }
}

const buch1= new Buch('ffffff','rrr', 1998, 'Dram');
buch1.buchInString();

function buecherLaden(JSONstring) {
    const buchArray=JSON.parse(JSONstring);
    return buchArray;
}

function sucheNachJahr1(beucherArray, jahr) {
    return beucherArray.filter(buch => buch.veroeffentlichungsjahr > jahr)
}
// -------------- Variante 2 -------------

function sucheNachJahr2(beucherArray, jahr) {
    for(let buch of beucherArray) {
        const result= [];
        if (buch.veroeffentlichungsjahr === jahr) {
            result.push(buch);
        }
    }
    return result;
}

const BuchJSONStrings= [
    {
        title:'ffffff', author:'rrr', veroeffentlichungsjahr:1998, genre:'Dram'
    },
    {
        title:'sssss', author:'sss', veroeffentlichungsjahr:2023, genre:'Roman'
    }
]
const JSONStrings= JSON.stringify(BuchJSONStrings);

