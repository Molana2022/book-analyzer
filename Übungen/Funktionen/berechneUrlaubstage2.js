function berechneUrlaubstage(alter, betriebszugehörigkeit) {
    let urlaubstage = 24; // Grundanspruch
    if (alter > 50) urlaubstage += 5;

    const zusatzlicheTage = (jahre) => jahre > 10 ? 10 : jahre;
    urlaubstage += zusatzlicheTage(betriebszugehörigkeit);

    return urlaubstage;
}

console.log(berechneUrlaubstage(45, 12)); 
console.log(berechneUrlaubstage(55, 8));  
