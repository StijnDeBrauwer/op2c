import React, { FC } from "react";
import { Colors } from "../../assets";
import { Card } from "../../components/card/card.component";
import "./whoAreWe.style.scss";

import Hugo from "../../assets/images/whoAreWe/Hugo.jpg";
import Agathe from "../../assets/images/whoAreWe/Agathe.jpg";
import Saar from "../../assets/images/whoAreWe/Saar.jpg";
import Sam from "../../assets/images/whoAreWe/Sam.jpg";
import Vives from "../../assets/images/whoAreWe/Vives_logo.png";

const WhoAreWePage: FC = () => {
  return (
    <div className="whoAreWe">
      <Card className="card" backgroundColor={Colors.accent}>
        We zijn jonge studenten en komen allemaal uit de regio van Izegem.
        Izegem was ooit het belangrijkste centrum van de Belgische schoenen- en
        borstelnijverheid. Daar ligt deels de oorsprong van de bijnaam van de
        Izegemnaars: De Pekkers. Daarom hebben we ervoor gekozen om het woord
        “Pekkers” te integreren in onze groepsnaam. Dreamy hebben we gekozen
        omdat we allemaal dromen van vooruitgang. Dit zowel op persoonlijk - als
        maatschappelijk vlak. Verder verlangen we ook naar een samenleving waar
        vrijheid, gelijkheid en eerlijkheid centraal staan. Tot slot werken we
        allemaal graag op creatief vlak door out-of-the-box te denken.
      </Card>

      <Card className="card" backgroundColor={Colors.text}>
        <img src={Hugo} alt="Hugo" />

        <div className="card__description">
          <h1>Hugo Gentenaar</h1>
          Ik ben Hugo Gentenaar en ik ben 22 jaar en woon in Izegem. Ik volg in
          VIVES in het studiegebied Sociaal-Agogisch Werk Kortrijk de opleiding
          Sociaal Werk met als afstudeerrichting Maatschappelijk Werk. In mijn
          toekomstige job zou ik graag willen werken in een organisatie met
          ouderen en mensen met een beperking. Zelf denk ik gemakkelijk
          beïnvloedbaar te zijn. Ik wil door dit keuzetraject leren wat sociale
          beïnvloeding is zodat ik bewust ben van de gevaren en mij hier in de
          toekomst tegen kan weren. Maar door in groep een project uit te werken
          zullen we zelf ook mensen beïnvloeden. Sociale Beïnvloeding is niet
          alleen negatief maar ook positief, bijvoorbeeld: als je iets wilt
          bereiken bij een doelgroep en dan denk ik aan mijn toekomstige job.
        </div>
      </Card>

      <Card className="card" backgroundColor={Colors.primary}>
        <div className="card__description">
          <h1>Agathe Breyne</h1>
          Ik ben Agathe Breyne en ik zit in mijn laatste jaar bachelor in de
          maatschappelijke veiligheid. Ik koos voor deze richting omdat ik
          geboeid ben door uitdagingen en vraagstukken met betrekking tot het
          verhogen van veiligheid en leefbaarheid in de samenleving. Ik koos
          voor het keuzetraject Sociale Beïnvloeding omdat ik hier echt een
          meerwaarde zie in mijn latere beroepsleven. Ik heb namelijk de ambitie
          om na mijn studie bij de politie te gaan werken. Ik zou het vak
          sociale beïnvloeding kunnen gebruiken bij een verdachtenverhoor. Aan
          de hand van psychologische ondervragingstechnieken zou ik sociale
          beïnvloeding gebruiken.
        </div>

        <div className="card__image-container">
          <img src={Agathe} alt="Agathe" />
        </div>
      </Card>

      <Card className="card" backgroundColor={Colors.text}>
        <img src={Saar} alt="Saar" />

        <div className="card__description">
          <h1>Saar Ballegeer</h1>
          Mijn naam is Saar Ballegeer en ik volg de opleiding Sociaal Werk,
          afstudeerrichting Maatschappelijk Werk, aan de VIVES Hogeschool in
          Kortrijk. Ik heb voor het keuzetraject Sociale Beïnvloeding gekozen,
          omdat ik er meer wil over leren. Vooral omdat ik merk dat we heel
          sterk beïnvloed worden bijvoorbeeld door sociale media, zeker wij als
          jonge mensen zijn daar gevoelig voor. Ik zou graag leren hoe dat komt
          en waarom wij daar soms niet bij stilstaan. Wat ik nu leer over
          sociale beïnvloeding in het keuzetraject, zal ik zeker kunnen meenemen
          naar mijn job later, aangezien ik graag met jongeren zou willen
          werken.
        </div>
      </Card>

      <Card className="card" backgroundColor={Colors.primary}>
        <div className="card__description">
          <h1>Samantha Vandekerckhove</h1>
          Mijn naam is Samantha Vandekerckhove en ik ben een toekomstige
          opvoeder-begeleider. Op dit moment zit ik in mijn laatste jaar
          Bachelor Orthopedagogie. Ik koos voor het keuzetraject Sociale
          Beïnvloeding omdat ik elke dag versteld sta over hoe snel ik zelf te
          beïnvloeden ben. Graag wil ik er meer over leren, zodat ik weerbaar
          kan worden tegen sociale beïnvloeding. Al vraag ik mij af of dit
          eigenlijk mogelijk en nodig is? Ik geloof sterk dat ik sociale
          beïnvloeding later zal kunnen gebruiken in mijn job als
          opvoeder-begeleider, bv. om bij een activiteit de groep mee te trekken
          in het spel.
        </div>
        <img src={Sam} alt="Sam" />
      </Card>

      <Card className="card collaboration" backgroundColor={Colors.accent}>
        <div className="card__description">
          <h1>In samenwerking met:</h1>
          <h2>Vives Hogeschool Kortrijk Studiegebied</h2>
          Sociaal-agogisch werk <br />
          Doorniksesteenweg 145 <br />
          8500 Kortrijk <br />
          +32 56 26 41 50 <br />
          saw.kortrijk@vives.be
        </div>
        <img src={Vives} alt="Vives" />
      </Card>
    </div>
  );
};

export { WhoAreWePage };
