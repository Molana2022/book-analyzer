// Daten aus dem Textfeld lesen

const jsonFeld = document.getElementById("jsonFeld");
const ladenBtn = document.getElementById("ladenBtn");
const analyseBtn = document.getElementById("analyseBtn");
const ergebnisContainer = document.getElementById("ergebnisContainer");

// Beispiel-JSON aus Datei laden
ladenBtn.addEventListener("click", function() {
    fetch("data.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Daten konnten nicht geladen werden.");
            }
            return response.json();
        })
        .then(data => {
            jsonFeld.value = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            zeigeFehler("Fehler beim Laden der Beispieldaten.");
        });
});


// Klick-Event für Analyse-Button
analyseBtn.addEventListener("click", function() {
    analysiereBuecher();
});


// Hauptfunktion für die Analyse

function analysiereBuecher() {

    // 1. JSON-Text holen
    let jsonText = jsonFeld.value;

    // Wenn leer → Fehlermeldung
    if (!jsonText.trim()) {
        zeigeFehler("Bitte gib gültige JSON-Daten ein.");
        return;
    }

    let buchListe;

    // 2. JSON in Objekt umwandeln
    try {
        buchListe = JSON.parse(jsonText);
    } catch (fehler) {
        zeigeFehler("JSON ist ungültig. Bitte korrigieren.");
        return;
    }

    // Prüfen ob Array
    if (!Array.isArray(buchListe)) {
        zeigeFehler("Die JSON-Daten müssen eine Liste (Array) enthalten.");
        return;
    }

    // Ergebnisse berechnen
    const anzahl = berechneAnzahl(buchListe);
    const maxBuch = findeMaxSeiten(buchListe);
    const alteTitel = filtereAlteTitel(buchListe);
    const sortierteTitel = sortiereAlphabetisch(alteTitel);
    const jsonErgebnis = JSON.stringify(sortierteTitel, null, 2);

    // Ergebnisse anzeigen
    zeigeErgebnisse(anzahl, maxBuch, sortierteTitel, jsonErgebnis);
}


// Hilfsfunktionen (modularisiert)

// Anzahl der Bücher
function berechneAnzahl(buecher) {
    return buecher.length;
}

// Buch mit den meisten Seiten finden
function findeMaxSeiten(buecher) {
    return buecher.reduce((max, buch) =>
        (buch.seiten > max.seiten ? buch : max)
    );
}

// Titel vor dem Jahr 2000 filtern
function filtereAlteTitel(buecher) {
    return buecher
        .filter(b => b.veröffentlicht < 2000)
        .map(b => b.titel);
}

// Alphabetisch sortieren
function sortiereAlphabetisch(arr) {
    return arr.sort((a, b) => a.localeCompare(b));
}


// Ausgabe im HTML

function zeigeErgebnisse(anzahl, maxBuch, titelListe, jsonResult) {
    ergebnisContainer.innerHTML = `
        <p><strong>Anzahl der Bücher:</strong> ${anzahl}</p>

        <p><strong>Buch mit den meisten Seiten:</strong><br>
        Titel: ${maxBuch.titel}<br>
        Seiten: ${maxBuch.seiten}</p>

        <p><strong>Titel vor dem Jahr 2000 (alphabetisch sortiert):</strong><br>
        ${titelListe.join(", ")}</p>

        <p><strong>JSON der finalen Liste:</strong></p>
        <pre>${jsonResult}</pre>
    `;
}

// Fehlermeldung anzeigen
function zeigeFehler(text) {
    ergebnisContainer.innerHTML = `<p style="color:red;">${text}</p>`;
}
