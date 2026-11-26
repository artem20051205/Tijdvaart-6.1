<!DOCTYPE html>
<html lang="nl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tijdvaart</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header class="kop">
        <h1>Tijdvaart</h1>
        <p>Vaar mee over de Oudegracht in 1929</p>
    </header>

    <div class="container">
        <div class="videodiv">
            <video id="film" src="assets/film-1929.mp4" controls></video>
        </div>

        <div class="kaartdiv">
            <img src="assets/image.png" alt="Kaart van de Oudegracht">

            <div class="punten" id="punten"></div>

            <div class="info">
                <h2 id="titel">Welkom aan boord</h2>
                <p id="tekst">Druk op play of kies een punt.</p>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>

</html>