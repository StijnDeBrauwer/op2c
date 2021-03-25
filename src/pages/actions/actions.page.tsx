import React from "react";
import "./actions.style.scss";
import poster1 from "../../assets/images/actions/poster1.png";
import poster2 from "../../assets/images/actions/poster2.png";

import spreuk1 from "../../assets/images/actions/spreuk1.png";
import spreuk2 from "../../assets/images/actions/spreuk2.png";
import spreuk3 from "../../assets/images/actions/spreuk3.png";
import spreuk4 from "../../assets/images/actions/spreuk4.png";
import spreuk5 from "../../assets/images/actions/spreuk5.png";

import tip1 from "../../assets/images/actions/tip1.png";
import tip2 from "../../assets/images/actions/tip2.png";
import tip3 from "../../assets/images/actions/tip3.png";
import tip4 from "../../assets/images/actions/tip4.png";

const ActionsPage = () => {
  return (
    <div className="actions-page">
      <p>
        Op deze pagina zijn onze acties te vinden. De onderstaande posters kan
        je bezichtigen in de SAW-toiletten.
      </p>

      <div className="actions-page__spotlight">
        <img src={poster1} alt="poster 1" />
        <img src={poster2} alt="poster 2" />
      </div>

      <section>
        <p>
          We posten ook regelmatig handige tips of toffe spreuken op onze
          instagrampagina. Je kan er ook af en toe eens een blik werpen achter
          de schermen
        </p>

        <h1>Onze spreuken</h1>

        <div className="images-container">
          <img src={spreuk1} alt="spreuk 1" />

          <img src={spreuk2} alt="spreuk 2" />

          <img src={spreuk3} alt="spreuk 3" />

          <img src={spreuk4} alt="spreuk 4" />

          <img src={spreuk5} alt="spreuk 5" />
        </div>

        <h1>Onze tips</h1>

        <div className="images-container">
          <img src={tip1} alt="tip 1" />

          <img src={tip2} alt="tip 2" />

          <img src={tip3} alt="tip 3" />

          <img src={tip4} alt="tip 4" />
        </div>
      </section>
    </div>
  );
};

export { ActionsPage };
