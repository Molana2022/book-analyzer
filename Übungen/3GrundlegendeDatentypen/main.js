let temperatur = 20;
let istWarm = temperatur > 25;

let anzahlBesucher = 10;
let maxBesucher = 25;
let istUeberfuellt = anzahlBesucher > maxBesucher;

let situation = '';

if (istWarm && istUeberfuellt) {
  situation = 'Es ist warm und der Ort ist überfüllt';
} else if (istWarm) {
  situation = 'Es ist warm';
} else if (istUeberfuellt) {
  situation = 'Der Ort ist überfüllt';
} else {
  situation = 'Es ist weder warm noch überfüllt';
}

console.log(situation);
