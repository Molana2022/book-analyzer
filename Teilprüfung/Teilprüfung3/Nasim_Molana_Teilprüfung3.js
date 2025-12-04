const buecherListeJSON = `[
    {"titel": "Mansfield Park", "veröffentlicht": 1814, "seiten": 480},
    {"titel": "Stolz und Vorurteil", "veröffentlicht": 1813, "seiten": 432},
    {"titel": "Emma", "veröffentlicht": 1816, "seiten": 392},
    {"titel": "Der große Gatsby", "veröffentlicht": 1925, "seiten": 180}, 
    {"titel": "1984", "veröffentlicht": 1949, "seiten": 328}
]`;

function JSONtoObj(buecherListe) {

    // a) JSON → Objekt
    const listeObj = JSON.parse(buecherListe);

    // b) Anzahl der Bücher
    const anzahlBuecher = listeObj.length;

    // c) Buch mit den meisten Seiten
    const buchMitMaxSeiten = listeObj.reduce((max, buch) =>
        buch.seiten > max.seiten ? buch : max
    );

    // d) Bücher vor 2000 → nur Titel
    const vor2000 = listeObj
        .filter(buch => buch.veröffentlicht < 2000)
        .map(buch => buch.titel);

    // e) alphabetisch sortieren (NUR Bücher vor 2000)
    const sortierteVor2000 = [...vor2000].sort((a, b) =>
        a.localeCompare(b)
    );

    // f) JSON-String vom sortierten Array
    const resultJSON = JSON.stringify(sortierteVor2000);

    return {
        anzahlBuecher,
        titelMaxSeiten: buchMitMaxSeiten.titel,
        titelVor2000: vor2000,
        sortierteTitelVor2000: sortierteVor2000,
        JSONString: resultJSON
    };
}

console.log(JSONtoObj(buecherListeJSON));
