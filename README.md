# Real Estate Care

De applicatie is gemaakt voor inspecteurs voor Real Estate Care.
In deze app kunnen ze inspecties starten,invoeren en opsturen zodat deze kunnen worden toegevoegd aan de reeds bestaande backend.

In de app kan je naast nieuwe inspecties uitvoeren ook oude inspecties bekijken of bewerken, de kennisbank raadplegen en de instellingen van jouw (de inspecteur) aanpassen.

De applicatie is gemaakt in React met Tailwind, React Router, React Query & Axios.

## Inspecties

Als je een toegewezen inspectie gaat invullen, kan je kiezen en of wisselen tussen de redenen van komst. Dit is bijvoorbeeld handig als een inspecteur schade wilt opnemen maar dat hij gelijk onderhoud bij een ander deel van het pand opmerkt. Het formulier is verder in te vullen op verschillende punten zoals dropdown menu's voor de prijs, of radio-buttons om de urgentie te bepalen en pdf bestanden uploaden. Verder kan de inspecteur aan elke reden van bezoek meerdere foto's toevoegen en die gelijk bekijken. Mocht de inspecteur deze foto's willen verwijderen dan kan hij op de desbetreffende afbeelding klikken.

Reeds ingevoerde inspecties kunnen worden bekeken en of bewerkt. Tijdens het bekijken van een inspectie kan je de foto's terug zien en bijvoorbeeld het pdf bestand downloaden (mits die aanwezig is) Hierna kan je een inspectie nog steeds bewerken. 

## Kennisbank 

Hierin zijn artikelen te vinden die de inspecteurs kunnen raadplegen bij vragen of nieuwsgierigheid. De individuele blogs kunnen worden toegevoegd en afgebeeld via de database, zodat geen repetitieve pagina's gemaakt moeten worden.

## instellingen

De instellingen van de inspecteur zijn hier in aan te passen, zoals de naam, de avatar maar ook de Two Factor Authenthication. De aanpassingen veranderen tijdelijk de localstorage. Hierdoor word je naam bijvoorbeeld aangepast in de app maar tijdens een refresh veranderd het weer.

## UserSection
Hierin word de inspecteur verwelkomt, en kan je de meldingen aan/uit zetten, je kan uitloggen maar je kan ook naar de search/zoek pagina gaan, waarin je kan zoeken op het adres door alle inspecties (Nieuw & Oud)

## Navbar & Footer 
Deze linken allemaal naar dezelfde pagina's, alleen is de footer met geschreven tekst en de navbar alleen met iconen. Hierdoor kan de inspecteur ook zijn weg vinden zonder de kennis te hebben van de iconen.

# Verantwoording

## Toepassingen van de applicatie op het gebied van de WCAG2.1 richtlijnen en de 10 Heuristieken
Ik wilden zorgen dat het ontwerp van applicatie zo minimalistisch mogelijk bleef aangezien de inspecties enorm grote, complexe blokken met informatie konden worden. Ik heb deze inspecties zoveel mogelijk gescheiden van elkaar en op datum gesorteerd.Ook wilden ik dat de gebruiker direct naar de desbetreffende inspectie door kon klikken om bijvoorbeeld te bewerken. Hierdoor hoeft de gebruiker niet de inspectie te onthouden. Verder heb ik de applicatie zo gemaakt dat er veel feedback wordt getoond naar de inspecteur zoals flash messages, hover:transformaties & navigaties (redirects). Er is ook ruimte gemaakt voor de gevorderde gebruiker om sneller te werk te gaan zoals bijvoorbeeld de zoek functie te gebruiken. Verder heb ik rekening gehouden met Error handling, zoals een persoonlijke 404 pagina met een link terug naar de hoofdpagina en het gelijk kunnen verwijderen van afbeeldingen, maar ook het onthouden van de states(informatie) van het formulier bij een reden van inspectie zoals Schade die dan tijdelijk per ongeluk werd uitgevinkt. Ik heb tijdens het maken van de applicatie enorm veel getest op verschilende telefoons(netlify), resoluties en met een lokale json server om te verifieren dat de code van het bewerken van een inspectie of het verzenden ervan correct werd afgehandeld. Het resultaat is naar mijn idee en snel werkende logische applicatie met tekst ondersteuning van de iconen op de hoofdpagina en de footer, maar ook veel verwijzingen en links naar verschillende pagina's zodat heel snel gewerkt kan worden.

## Verbeteringen
Mijn grootste verbeterpunt voor de applicatie is de duidelijkheid van doorlinken naar inspecties. Een gebruiker krijgt geen visuele ondersteuning tijdens het zoeken naar zijn of haar inspectie. Ik heb dit wel toegepast op bijvoorbeeld de uitgevoerde inspecties pagina maar omdat ik best wat tijd had gespendeerd aan het maken van de toegewezen inspecties pagina (met name de vinkjes voor de redenen) miste de tabel de ruimte om hier extra duidelijkheid aan toe te voegen. Ook had ik bijvoorbeeld een terug knop kunnen plaatsen bij het invullen van formulieren zodat de Inspecteur zijn vrijheid en controle behoud binnen de applicatie.

## Tot slot

Ik heb enorm veel geleerd tijdens het bouwen van de applicatie en heb veel tijd besteed om react te leren. Ik vond het soms heel moeilijk dat er weinig structuur werd geboden aangezien ik de module hiervoor een applicatie had gemaakt in laravel met zeer veel structuur, maar dit bood ook kansen om op verschillende manieren en op verschillende tijden te leren over bijvoorbeeld routing, data fetching en queries. Mijn applicatie is dan ook als ware door een langzame transformatie gegaan waar de processen steeds efficienter en/of simpeler werden uitgevoerd/toegepast.






