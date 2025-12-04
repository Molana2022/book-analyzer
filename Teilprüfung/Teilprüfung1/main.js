document.addEventListener('DOMContentLoaded', () => {
    const generatedNumber = Math.floor((Math.random()*100)+1);
    console.log(generatedNumber);
    let userGuess = document.getElementById('guess');
    let msg= document.getElementById('message');
    const submit= document.getElementById('submitBtn');
    const exit= document.getElementById('exitBtn');

    submit.onclick= function() {
        let userGuessValue = Number(userGuess.value); 
        console.log(userGuessValue);
        if (userGuessValue< 0 || userGuessValue>100)
        {
            console.log('Bitte gib eine Zahl zwischen 0 und 100 ein!');
            msg.textContent= 'Bitte gib eine Zahl zwischen 0 und 100 ein!';
        }
        else if (userGuessValue<generatedNumber) msg.textContent= 'Zu niedrig';
        else if (userGuessValue>generatedNumber) msg.textContent= 'Zu hoch';
        else {
            msg.textContent= ' Du hast gewonnen!🎉';
            msg.classList.add('won');
        };
    }
    exit.onclick= function() {
        userGuess.value='';
        msg.textContent='';
    }
})