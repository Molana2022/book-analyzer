const blogListe = [
    {
        'titel':'dddd',
        'autor':'ddd',
        'status':{
            'veröffentlicht': false,
            'entwurf': true,
            'gelöscht': false
        }
    },
      {
        'titel':'ffff',
        'autor':'fff',
        'status':{
            'veröffentlicht': false,
            'entwurf': true,
            'gelöscht': false
        }
    },
      {
        'titel':'hhhh',
        'autor':'hhh',
        'status':{
            'veröffentlicht': false,
            'entwurf': true,
            'gelöscht': false
        }
    }
];

for(let blog of blogListe) {
    blog.status.veröffentlicht= true;
    blog.status.entwurf= false;
}
// دومین عنوان را  
//  ذخیره کنیم
let [, {titel: post2}]= blogListe;
// Wandle das Objekt blogListe in einen JSON-String um

const blogListeJSON= JSON.stringify(blogListe);






class Buch { 
  constructor(titel, autor, veroeffentlichungsjahr, genre) { 
    this.titel = titel; 
    this.autor = autor; 
    this.veroeffentlichungsjahr = veroeffentlichungsjahr; 
    this.genre = genre; 
  } 
 
  toJSONString() { 
    return JSON.stringify({ 
      titel: this.titel, 
      autor: this.autor, 
      veroeffentlichungsjahr: this.veroeffentlichungsjahr, 
      genre: this.genre 
    }); 
  } 
} 
 
function buecherLaden(jsonString) { 
  const buecherArray = JSON.parse(jsonString); 
  return buecherArray.map(buch => new Buch(buch.titel, buch.autor, buch.veroeffentlichungsjahr, buch.genre)); 
} 
 
function sucheNachJahr(buecher, jahr) { 
  return buecher.filter(buch => buch.veroeffentlichungsjahr > jahr); 
} 
 

const buecherJSON = JSON.stringify([ 
  {titel: "Buch 1", autor: "Autor 1", veroeffentlichungsjahr: 1999, genre: "Genre 1"}, 
  {titel: "Buch 2", autor: "Autor 2", veroeffentlichungsjahr: 2005, genre: "Genre 2"} 
]);


const geladeneBuecher = buecherLaden(buecherJSON); 

const buecherNach2000 = sucheNachJahr(geladeneBuecher, 2000); 

console.log(buecherNach2000); 