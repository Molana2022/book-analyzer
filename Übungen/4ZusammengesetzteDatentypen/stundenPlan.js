// 5.4 Übung: Stundenplan mit switch/case

const hour = 17.18;

switch (true) {
    case (hour >= 8.00 && hour <= 10.00):
        console.log("HTML lernen");
        break;

    case ( (hour >= 10.01 && hour <= 11.00) ||
           (hour >= 12.01 && hour <= 13.00) ):
        console.log("Pause");
        break;

    case (hour >= 11.01 && hour <= 12.00):
        console.log("CSS lernen");
        break;

    case (hour >= 13.01 && hour <= 15.00):
        console.log("JavaScript lernen");
        break;

    case (hour >= 15.01 && hour <= 16.00):
        console.log("Übung");
        break;

    case (hour >= 16.01 && hour <= 17.00):
        console.log("Kein Unterricht");
        break;

    default:
        console.log("Außerhalb des Stundenplans");
}
