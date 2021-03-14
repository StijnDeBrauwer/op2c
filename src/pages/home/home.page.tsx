import React from "react";
import "./home.style.scss";

import logo from "../../assets/images/logo.png";
import arrow from "../../assets/images/arrow.png";
import dreamyPekkers from "../../assets/images/home/dreamy-pekkers.jpg";

const HomePage = () => {
  return (
    <div className="home">
      <div className="banner">
        <div className="banner__text">
          <h1>Big dreams happen in small places </h1>
          <h2> Sit back and let the magic happen</h2>
        </div>
      </div>
      <section className="intro-container">
        <div className="intro-container__image">
          <img className="logo" src={logo} alt="logo" />
        </div>

        <div className="intro-container__description">
          <h1>Op’t weecee met de Dreamy pekkers</h1>
          <p>
            Dit is de officiële website van de Dreamy Pekkers. Wij zijn de
            sterke krachten achter de sensibiliseringscampagne OP²C (lees dit
            met een West-Vlaams accent). Op onze website is informatie te vinden
            over wie we zijn, wat we doen, wat onze acties zijn en nog veel
            meer!
          </p>
        </div>
      </section>

      <section className="images-container">
        <div className="logo-description-container">
          <img
            className="logo-description-container__arrow"
            src={arrow}
            alt="arrow"
          />
          <p className="logo-description-container__description">
            Dit is ons <b>nieuwe logo</b>. <br /> Het is terug te vinden op al
            onze media! Onze kernwaarden zijn verwerkt in ons logo. Het
            peace-teken staat voor respect. Respect hebben voor wie na jou komt
            in het toilet. En natuurlijk ook voor het onderhoudsteam die de
            toiletten proper houden. Wat netheid betreft, gebruikten we
            toiletborstel. Hij is aanwezig in het toilet. Gebruik hem dan ook.
            Innerlijke rust dan komt vooral terug in onze huisstijl. We kozen
            voor een kleurenpalet dat redelijk simpel is. Daarbij is ons logo
            ook redelijk zuiver en zorgt het niet voor onrust.
          </p>
        </div>

        <div className="dreamy-pekkers-description-container">
          <div className="dreamy-pekkers-description-container__arrow-container">
            <img className="arrow-container__arrow" src={arrow} alt="arrow" />
          </div>

          <div className="dreamy-pekkers-description-container__image">
            <p className="image__description">
              Dit zijn wij, <br /> <b>de Dreamy Pekkers</b>
            </p>
            <img
              className="image__image"
              src={dreamyPekkers}
              alt="dreamy-pekkers"
            />
          </div>
        </div>
      </section>

      <section className="values-container"></section>
    </div>
  );
};

export { HomePage };
