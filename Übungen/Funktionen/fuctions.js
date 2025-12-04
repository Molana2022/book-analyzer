const berechneQuadrat1 = function (no) {
 return  no*no;
}

let myNo= 0;

myNo=9;
const ergebnis = berechneQuadrat1(myNo);


if (ergebnis > 100) console.log(' Das Ergebnis ist größer als 100.');
else console.log(' Das Ergebnis ist kleiner oder gleich 100.');


for(let i=1; i<=5; i++) {
     i%2 === 0 ? console.log(i, 'Gerade') : console.log(i, 'Ungerade');
}


// ---------------------------
let status= [ 'einzeln' , 'verheiratet'];
function berechneSteuern(einkommen , status) {
    let steuern=0;
    if (status=== 'einzeln') {
        einkommen<12000 ? steuern= 12 : steuern= 22
    }
    else {
        einkommen<24000 ? steuern= 10 : steuern= 20
    }
    return (einkommen*steuern) / 100
}


let steuernEinzeln = berechneSteuern(30000, 'einzeln'); 
let steuernVerheiratet = berechneSteuern(30000, 'verheiratet'); 

console.log("Steuern (einzeln):", steuernEinzeln);  
console.log("Steuern (verheiratet):", steuernVerheiratet); 