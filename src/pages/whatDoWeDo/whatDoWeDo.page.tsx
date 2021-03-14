import React from "react";
import { Colors } from "../../assets";
import { Card } from "../../components/card/card.component";
import "./whatDoWeDo.style.scss";

import arrow from "../../assets/images/arrow.png";
import rol from "../../assets/images/whatDoWeDo/rol.jpg";

const WhatDoWeDoPage = () => {
  const navigateToPage = (url: string): void => {
    console.log("test..", url);
    window.open(url, "_blank");
  };

  return (
    <div className="whatDoWeDo">
      <Card className="card" backgroundColor={Colors.accent}>
        <p>
          Waarom is het zo moeilijk om schooltoiletten net te houden? Van kleine
          peutertoiletjes tot rijen compartimentjes op de hogeschool, veel
          studenten klagen regelmatig over dit onderwerp. Vuile toiletten lijkt
          een onoplosbaar fenomeen. Waarom is en blijft het zo moeilijk
          schoolpotten net te houden?
        </p>
        <p>
          Eerst en vooral blijft het toiletbezoek een taboe. Ondanks dat het
          toilet al jaren hetzelfde is werd er nauwelijks onderzoek naar gedaan.
          Het toiletbezoek, zeker wanneer het over stoelgang gaat, is nog weinig
          genormaliseerd. Meer nog; sommige studenten mijden zelfs het
          toiletbezoek wat heel ongezond is. Urine ophouden kan leiden tot
          infecties en kan de kans vergroten op een blaasontsteking. Dit geldt
          ook zo voor de stoelgang. Daarom wilden wij als groep ons hiervoor
          inzetten.
        </p>
        <p>
          Wij willen dit probleem aanpakken door positief gedrag uit te lokken.
          Wanneer toiletgebruikers een blad wc-papier zien liggen op de grond
          denken ze algauw dat ze er een zootje mogen van maken. Hoe vaak
          gebeurt het dat je doorspoelt en er toch remsporen in het toilet
          blijven hangen? Of situaties wanneer de toiletdruk te laag is waardoor
          het lang duurt tot dat de spoelbak gevuld is. Vuile toiletten hebben
          vaak ook te maken met sociale controle. Wanneer je weet dat iemand na
          jou komt heb je nu eenmaal meer de neiging om het toilet netjes achter
          te laten. De anonimiteit speelt hier een grote rol. We willen nu
          eenmaal niet de etiquette krijgen dat we ‘onzindelijk’ zijn. Ook de
          privacy speelt een rol in het vermijden van schoolpotten dit omdat het
          toiletbezoek nog altijd niet genormaliseerd is. Toilethokjes worden
          meestal slechts gescheiden door een schotje. We zitten dan met
          gedachten van ‘oh, neen die gaat dat horen dat het valt’.
        </p>
        <p>
          Als groep willen we ons inzetten rond het taboe van het toiletbezoek
          en de WC bespreekbaar maken. Door propere toiletten in de kijker te
          zetten en de studenten te laten stilstaan bij hun toiletnetheid. Met
          als doel het aantal propere toiletten op school te laten toenemen en
          mensen meer innerlijke rust laten ervaren bij het toiletbezoek.
        </p>
      </Card>

      <div className="mission-vision-container">
        <Card
          className="mission-vision-container__card"
          backgroundColor={Colors.text}
        >
          <h1>Missie</h1>
          <p>
            Het begon allemaal met de frustratie voor de toiletrol die door
            velen niet vervangen wordt. En dan zijn er nog mensen die een
            openbaar toilet vuil achterlaten zonder enig respect voor de
            volgende bezoeker. Wij zouden hier verandering in willen brengen.
            Want wij geloven in een maatschappij met propere openbare toiletten.
            Waarbij iedereen een beetje zorg draagt voor het toilet, zodat het
            een aangenaam toiletbezoek blijft voor jezelf, maar ook voor de
            medemens.
          </p>
        </Card>

        <div className="mission-vision-container__arrow-container">
          <img
            src={arrow}
            className="arrow-container__arrow-left"
            alt="Arrow left"
          />
          <img
            src={arrow}
            className="arrow-container__arrow-right"
            alt="Arrow right"
          />
        </div>
        <Card
          className="mission-vision-container__card"
          backgroundColor={Colors.text}
        >
          <h1>Visie</h1>
          <p>
            Respect, netheid en innerlijke rust zijn onze belangrijkste waarden.
            We hechten er belang aan dat mensen respect tonen voor diegenen die
            het toilet kuisen, maar daarnaast ook voor de anderen die het toilet
            nuttigen. Wie is er nog niet naar een vuil toilet geweest? Het is
            daarbij van belang dat er een zeker oog is voor netheid. Mensen
            moeten bewust zijn van het feit dat wc’s proper gehouden moeten
            worden. Zo kunnen we iedereen de kans bieden om innerlijke rust te
            ervaren op een proper toilet.
          </p>
        </Card>
      </div>

      <div className="inspiration-container">
        <Card backgroundColor={Colors.accent}>
          <h1>Onze inspiratiebronnen</h1>
        </Card>

        <Card
          className="card__link"
          onClick={() =>
            navigateToPage(
              "https://europa.eu/citizens-initiative/water-and-sanitation-are-human-right-water-public-good-not-commodity_nl"
            )
          }
        >
          Recht op water en sanitaire voorziening
        </Card>
        <Card
          className="card__link"
          onClick={() =>
            navigateToPage(
              "https://www.nederlands.nl/nedermap/columns/column/129438.html"
            )
          }
        >
          De WC-rollen ergernis
        </Card>
        <Card
          className="card__link"
          onClick={() =>
            navigateToPage(
              "https://www.gelukinjehoofd.be/verhaal-lege-toiletrol/"
            )
          }
        >
          Het verhaal van de lege toiletrol
        </Card>
        <Card
          onClick={() =>
            navigateToPage(
              "https://www.coolesuggesties.nl/remsporen-en-lege-toiletrol-grootste-wc-ergernissen/"
            )
          }
          className="card__link"
        >
          Het Grote WC-onderzoek: Remsporen en lege toiletrol
        </Card>
        <Card
          onClick={() => navigateToPage("https://www.worldtoilet.org/")}
          className="card__link"
        >
          World toilet organization
        </Card>
        <Card
          onClick={() =>
            navigateToPage("https://www.instagram.com/onedayonetoilet/")
          }
          className="card__link"
        >
          @onedayonetoilet
        </Card>
      </div>

      <div className="history-container">
        <Card backgroundColor={Colors.accent}>
          <div>
            <h1>De geschiedenis van het toilet</h1>
            <p>
              We beginnen bij het begin. Neem dit maar heel letterlijk, we
              overlopen eerst en vooral de geschiedenis van het toilet.
            </p>
            <p>
              Vroeger was er geen toilet zoals wij dat kennen in onze huidige
              woningen. Het “toilet” was een huisje in de tuin. Onder het huisje
              was er een diepe kuil. Als de kuil vol was dan dekten ze de kuil
              dicht of schepten ze hem leeg. Een leuke bezigheid, vind je niet?
            </p>
            <p>
              Bij de Romeinen waren er openbare toiletten. Dat was in een
              badhuis. Er waren geen gescheiden ruimtes. Iedereen zat in één
              ruimte terwijl men zijn behoefte deed en er kon wat gepraat
              worden. De Romeinen hadden een “goed” rioolsysteem. Alles kwam in
              een goot terecht en verdween vervolgens in de rivieren.
            </p>
            <p>
              Daarna in de Middeleeuwen is veel van de Romeinse kennis
              verdwenen. Men deed zijn behoefte terug in een emmer of ergens
              buiten.
            </p>
            <p>
              Het moderne toilet met waterspoeling is in de 16e eeuw uitgevonden
              door de Engelsman John Harington. Het is steeds verder ontwikkeld.
              Plots deed het toilet bij iedereen zijn intrede. Toen was dat
              bijzonder, nu is het iets heel normaal voor ons (Wikipedia, 2021).
            </p>
            <p>
              Het is ook interessant om te weten dat het toilet aan het begin
              van de 21e eeuw niet universeel was. Volgens het WHO hadden in
              2014 een half miljard mensen in India nog geen toegang tot een
              toilet. Zij deden of doen nog steeds hun behoefte in de open
              natuur zonder enige privacy of waardigheid (Wikipedia, 10 februari
              2021).
            </p>
            <p>
              Al sinds het bestaan van de mensheid moeten mensen naar het
              toilet, in alle mogelijke sanitaire omstandigheden. Eerst en
              vooral werd het toilet doorheen de jaren veel minder sociaal. Pas
              bij de Grieken werd het toilet een ‘klein kamertje’ waar je alleen
              was (Wikipedia, 10 februari 2021). Toch duurde het nog eventjes
              voor wij hier in België naar een individueel toilet gingen.
              Daarvoor zat je dus gewoon naast je collega op het toilet. Als dat
              geen sociale aangelegenheid is. De elevator pitch op een geheel
              ander niveau.{" "}
            </p>
            <p>
              Het toilet komt van het Franse woord ‘toilette’. Oorspronkelijk
              had dit woord een veel bredere betekenis dan enkel puur
              ‘ontlasting’. Het ging over de persoonlijke verzorging in het
              algemeen. Het toilet is daarmee etymologisch verwant aan het
              eufemistische ‘mijn neus poederen of ‘powder my nose’.
            </p>

            <p>
              <a href="https://wikikids.nl/Toilet" target="_blank">
                https://wikikids.nl/Toilet
              </a>
              <br />
              <a href="https://wikikids.nl/Toilet" target="_blank">
                https://nl.wikipedia.org/wiki/Openbaar_toilet
              </a>
            </p>
          </div>

          <div className="image-container">
            <img src={rol} alt="geschiedenis" />
          </div>
        </Card>
      </div>
    </div>
  );
};

export { WhatDoWeDoPage };
