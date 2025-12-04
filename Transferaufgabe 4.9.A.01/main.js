// a) Mehrzeiliger Text
const text = `
Berlin ist eine große Stadt.
Hamburg liegt im Norden.
Paris ist sehr schön.
`;

// b) Regex des Buches: Städte = Wort, Großbuchstabe + weitere Kleinbuchstaben
const regex = /\b[A-Z][a-z]+/g;

// c) Alle gefundenen Stadtnamen als Array speichern
const gefundeneStaedte = text.match(regex) || [];

// d) Namen zu einer kommagetrennten Zeichenkette verbinden
const stadtnamenString = gefundeneStaedte.join(", ");

// e) Ausgabe in der Konsole
console.log(stadtnamenString);
// --------------------------------------------

const alter= 7;
const begleitet= true;

if (alter >= 16) { 
    console.log("Du darfst den Film alleine sehen."); 
} else if (alter < 16 && begleitet) { 
    console.log("Du darfst den Film sehen, weil du begleitet wirst."); 
} else { 
    console.log("Du darfst den Film nicht sehen."); 
}
