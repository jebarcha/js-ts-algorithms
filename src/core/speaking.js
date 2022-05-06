console.log('Speak');

function speak(message, language = 'en-US') {
    const msg = new SpeechSynthesisUtterance(message);
    msg.lang = language;
    speechSynthesis.speak(msg);
}

//speak('May the Force be with you');
//speak('Cia, io sono Daniele', 'it-IT');
//speak('Hola Sagrario, Bienvenida', 'es-MX');
speak('Oh este programa realmente puede hablar, asombroso', 'es-MX');
console.log('hey');

