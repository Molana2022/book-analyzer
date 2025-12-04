// Funktion zur Temperaturumrechnung 

function temperaturKonverter(temperatur, einheit) { 
    const debugNachricht = (einheit, wert) => console.log(`Konvertiere ${wert}°${einheit}`); 
    if (einheit === 'C') { 
        debugNachricht('C', temperatur); 
        return temperatur * 9/5 + 32; // Umrechnung von Celsius in Fahrenheit 
    } else if (einheit === 'F') { 
        debugNachricht('F', temperatur); 
        return (temperatur - 32) * 5/9; // Umrechnung von Fahrenheit in Celsius 
    } else { 
        return null; // Falls eine ungültige Einheit angegeben wird 
    } 
} 
 

// Schleife zur Demonstration der Funktion für Temperaturen von 0 bis 100 Grad Celsius 

for (let celsius = 0; celsius <= 100; celsius += 10) { 
    const fahrenheit = temperaturKonverter(celsius, 'C'); 
    console.log(`${celsius}°C entspricht ${fahrenheit.toFixed(2)}°F`); 
} 


 

// Beispielausgabe: 

// Konvertiere 0°C 

// 0°C entspricht 32.00°F 

// Konvertiere 10°C 

// 10°C entspricht 50.00°F 