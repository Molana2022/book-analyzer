function alterBerechnen(geburtsjahr) {
    
    const aktuellesJahr = new Date().getFullYear();
    if (geburtsjahr>aktuellesJahr) {
        return 'Geburtsjahr liegt in der Zukunft';
    } else {
        return aktuellesJahr-geburtsjahr;
    }
}
  


function alterBerechnen(geburtsjahr) { 
    const aktuellesDatum = new Date(); 
    const aktuellesJahr = aktuellesDatum.getFullYear(); 
    if (geburtsjahr > aktuellesJahr) { 
        return "Geburtsjahr liegt in der Zukunft"; 
    } else { 
        const alter = aktuellesJahr - geburtsjahr; 
        return alter; 
    } 
} 