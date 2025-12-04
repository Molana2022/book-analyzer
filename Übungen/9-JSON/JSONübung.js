// Definiere ein Array von Objekten, wobei jedes Objekt einen Studenten repräsentiert. Jedes Objekt soll 
// die Eigenschaften name, fachrichtung und semester enthalten. 
const studenten= [
    {name: 'AASA', fachrichtung:'Informatik',semester:2},
    {name: 'cxvsd', fachrichtung:'Informatik',semester:1},
    {name: 'fasddf', fachrichtung:'rr',semester:3}
 ]

 studenten.push({name: 'aaaa', fachrichtung:'rr',semester:1},{name: 'aNNa', fachrichtung:'Informatik',semester:1});
//  console.log(studenten);
function studentenInformatik(studentenArr) {
    let informatik= studentenArr.filter(student => student.fachrichtung === 'Informatik').filter(st => st.semester === 1);
    console.log(informatik);
}
studentenInformatik(studenten) ;

// d) Verwende die map-Methode, um ein neues Array zu erstellen, das nur die Namen der Studenten enthält. 
let nameStudenten= studenten.map(student => student.name);
console.log(nameStudenten);
// e) Konvertiere das Array von Studentenobjekten in einen JSON-String und speichere diesen in einer Variablen. 
const JSONstudenten = JSON.stringify(studenten);
console.log(JSONstudenten);
// f) Parse den JSON-String zurück in ein Array von Objekten. 
const studentenObj= JSON.parse(JSONstudenten);
console.log(studentenObj);
// g) Gib das resultierende Array in der Konsole aus, um zu überprüfen, ob die Konvertierung korrekt funktioniert hat.
