class KontaktVerwaltung {
    constructor() {
        this.kontakte = {
            "Max Mustermann": "max.mustermann@example.com",
            "Erika Musterfrau": "erika.musterfrau@example.com",
            "Sandra Beispiel": "sandra.beispiel@example.com"
        };
    }

    // Kontakt hinzufügen
    neuerKontakt(name, email) {
        if (!this.kontakte[name]) {
            this.kontakte[name] = email;
            console.log(`${name} wurde hinzugefügt.`);
        } else {
            console.log(`${name} existiert bereits.`);
        }
    }

    // Kontakt löschen
    kontaktLöschen(name) {
        if (this.kontakte[name]) {
            delete this.kontakte[name];
            console.log(`${name} wurde gelöscht.`);
        } else {
            console.log(`${name} wurde nicht gefunden.`);
        }
    }

    // E-Mail suchen
    emailSuche(name) {
        return this.kontakte[name] || "Kontakt nicht gefunden.";
    }

    // Alle Kontakte anzeigen
    alleKontakte() {
        for (let name in this.kontakte) {
            console.log(`Name: ${name}, E-Mail: ${this.kontakte[name]}`);
        }
    }
}

// --- Verwendung / Example Usage ---

const system = new KontaktVerwaltung();

system.alleKontakte();

system.neuerKontakt("David Neu", "david.neu@example.com");

console.log(system.emailSuche("Max Mustermann"));

system.kontaktLöschen("Erika Musterfrau");

system.alleKontakte();
