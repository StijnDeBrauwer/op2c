import React from "react";
import "./contact.style.scss";
import insta from "../../assets/images/contact/insta.png";
import mail from "../../assets/images/contact/mail.png";

const ContactPage = () => {
  const navigateToInsta = () => {
    window.open("https://www.instagram.com/dreamypekkersop2c/", "_blank");
  };

  return (
    <div className="contact-page">
      <h1>Heeft u nog vragen? Aarzel niet en contacteer ons!</h1>

      <section>
        <div className="contact-page__entry">
          <img src={mail} alt="mail icon" />
          <a href="mailto:hugo.gentenaar@student.vives.be">
            Hugo Gentenaar (hugo.gentenaar@student.vives.be)
          </a>
        </div>

        <div className="contact-page__entry">
          <img src={mail} alt="mail icon" />
          <a href="mailto:saar.ballegeer@student.vives.be">
            Saar Ballegeer (saar.ballegeer@student.vives.be)
          </a>
        </div>

        <div className="contact-page__entry">
          <img src={mail} alt="mail icon" />
          <a href="mailto:agathe.breyne@student.vives.be">
            Agathe Breyne (agathe.breyne@student.vives.be)
          </a>
        </div>

        <div className="contact-page__entry">
          <img src={mail} alt="mail icon" />
          <a href="mailto:samantha.vandekerckhove@student.vives.be">
            Samantha Vandekerckhove (samantha.vandekerckhove@student.vives.be)
          </a>
        </div>
      </section>

      <h1>
        Of neem zeker een kijkje op onze toffe instagram pagina! <br /> Klik op
        het logo voor meer info!
      </h1>

      <img
        onClick={navigateToInsta}
        className="insta"
        src={insta}
        alt="insta logo"
      />
    </div>
  );
};

export { ContactPage };
