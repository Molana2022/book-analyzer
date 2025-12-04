let kursDetails = {
    teilnehmerzahl: 15,
    name: 'JavaScript Einführungskurs',
    ort: 'Berlin'
};

kursDetails.teilnehmerzahl+=5;

let maximaleTeilnehmerzahl = 30;
const auslastung= kursDetails.teilnehmerzahl/maximaleTeilnehmerzahl;

let gerundeteAuslastung= Math.round(auslastung * 100) / 100;
console.log("Die Auslastung des Kurses beträgt:", gerundeteAuslastung); 





let text= 'Heute ist ein wunderschöner Tag, um programmieren zu lernen.';
console.log(text.length);
console.log(text.indexOf("programmieren")); 
text.replace('programmieren', 'coden');

const words = text.split(" "); 
console.log(words); 

console.log(text.toUpperCase());