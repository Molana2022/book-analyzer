let wetterTyp = ['Sonnig', 'Bewölkt', 'Regnerisch', 'Schneefall','neiblig'];

const bewerteWetter = function(wetter) {
    if (wetterTyp.includes(wetter)) {
    switch (wetter) {
        case 'Sonnig':
            console.log('Sonnig Sonnig');
            break;

        case 'Bewölkt':
            console.log('Bewölkt Bewölkt');
            break;

        case 'Regnerisch':
            console.log('Sonnig Sonnig');
            break;

        case 'Schneefall':
            console.log('Bewölkt Bewölkt');
            break;

        default :
            console.log('ungültisch');
     }
    } else {
        console.log('XXXXXXXXX');
    }
}

for (let i=0; i< wetterTyp.length; i++) {
    bewerteWetter(wetterTyp[i]);
}

const mittagessenZeit= () => {
    const aktuelleZeit= new Date()
    let stunde= aktuelleZeit.getHours();
    let minute= aktuelleZeit.getMinutes();
    console.log(`${(stunde>10) ? stunde : '0'+stunde}:${(minute>10) ? minute : '0'+minute}`);
    const nachricht= (12<= aktuelleZeit &&  aktuelleZeit<=14) ? 'es ist Zeit für das Mittagessen' : 'es ist nicht Zeit für das Mittagessen';
    return nachricht
}

console.log(mittagessenZeit());