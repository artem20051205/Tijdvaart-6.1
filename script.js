// prototype 2: punten in de film

const punten = [
    { nr: '1', titel: 'Gaardbrug', tijd: 47, tekst: 'De Gaardbrug is genoemd naar de tuin van de bisschop: de "gaard".' },
    { nr: '1a', titel: 'Werven en werfkelders', tijd: 59, tekst: 'Handelaren bewaarden hun spullen in de kelders onder de straat.' },
    { nr: '2', titel: 'Maartensbrug', tijd: 96, tekst: 'De oudste brug over de Oudegracht. De eerste stenen brug is uit 1404.' },
    { nr: '2a', titel: 'Vismarkt', tijd: 107, tekst: 'De oudste markt van Utrecht. Hier wordt al eeuwen vis verkocht.' },
    { nr: '3', titel: 'Kalisbrug', tijd: 112, tekst: 'Op deze brug werd vroeger vis verkocht.' },
    { nr: '4', titel: 'Stadhuisbrug', tijd: 142, tekst: 'Het stadhuis staat direct aan deze brug.' },
];

const film = document.getElementById('film');
const lijst = document.getElementById('punten');
const titel = document.getElementById('titel');
const tekst = document.getElementById('tekst');

// een knop voor elk punt
punten.forEach((punt) => {
    const knop = document.createElement('button');
    knop.textContent = punt.nr;
    knop.title = punt.titel;
    knop.addEventListener('click', () => {
        film.currentTime = punt.tijd;
        toon(punt);
    });
    lijst.appendChild(knop);
});

// tekst van het punt laten zien
function toon(punt) {
    titel.textContent = punt.titel;
    tekst.textContent = punt.tekst;
}

// bij een punt in de film: tekst veranderen
film.addEventListener('timeupdate', () => {
    const t = film.currentTime;
    const punt = punten.filter((p) => p.tijd <= t).pop();
    if (punt && titel.textContent !== punt.titel) toon(punt);
});
