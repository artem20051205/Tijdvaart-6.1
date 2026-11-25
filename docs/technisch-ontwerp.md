# Technisch Ontwerp

Naam: Artem
Team: Tijdvaart
Datum: 17 november 2026

## Wat ik maak

1. Een website voor een touchscreen: de film uit 1929 met een kaart ernaast.
2. Een CMS waar het archief de punten kan aanpassen.

## Technieken

| Wat                   | Techniek                  |
|                       |                           |
| Website               | HTML, CSS & JavaScript    |
| CMS                   | PHP                       |
| Database              | SQLite                    |
| Kaart                 | Leaflet + OpenStreetMap   |
| Film                  | MP4, verwerkt met ffmpeg  |
| Draaien               | Docker                    |
| Opslaan & planning    | GitHub                    |

## Hoe het werkt

Elk punt heeft een tijd in de film en een plek op de kaart. Zo weet de website waar de boot is.

- De film speelt en de boot vaart mee op de kaart.
- Bij een punt stopt de film. Met een lijn vergelijk je 1929 en nu.
- Tik je op een punt, dan gaat de film daarheen.
- Raakt niemand het scherm 90 seconden aan, dan begint het opnieuw.

In het CMS log je in. Daar kies je per punt het moment in de film, de plek op de kaart, de foto van nu en de teksten.

## Database

Tabel `punten`: titel, tijd, plek, teksten (NL en EN) en foto.
Tabel `beheerders`: gebruikersnaam en wachtwoord.

## Veiligheid en toegankelijkheid

- Alleen ingelogde beheerders kunnen iets aanpassen. Wachtwoorden zijn versleuteld.
- Grote knoppen, genoeg contrast, Nederlands en Engels.
