
// Methode 1

function berechneUrlaubstage(namenMitarbeiter, anzahlJahre) {
    let urlaubstageBasis= 26;
    const maximalUrlaubstage= 30;
    if ((anzahlJahre + urlaubstageBasis) < maximalUrlaubstage) {
        console.log(`Mitarbeiter ${namenMitarbeiter} hat Anspruch auf ${anzahlJahre + urlaubstageBasis} Urlaubstage in diesem Jahr.`)
    }
}
berechneUrlaubstage('Nasim', 2);

// Methode 2

function berechneUrlaubstagee(name, jahre) {
const urlaubstageBasis = 26;
let urlaubstageZusaetzlich;
if (jahre > 4) {
urlaubstageZusaetzlich = 4; // Maximal 4 zusätzliche Tage
} else {
urlaubstageZusaetzlich = jahre;
}
const gesamtUrlaubstage = urlaubstageBasis + urlaubstageZusaetzlich;
return `Mitarbeiter ${name} hat Anspruch auf ${gesamtUrlaubstage} Urlaubstage in diesem Jahr.`;
}
console.log(berechneUrlaubstage("Mathias", 2));