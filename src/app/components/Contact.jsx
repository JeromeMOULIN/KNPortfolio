import React from "react";

import "./contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="contentSection">
        <h3 className="orange underline">Ne soyez pas timide !</h3>
        <form>
          <div className="names">
            <label htmlFor="lastname">
              Nom<span className="jaune">*</span> :
            </label>
            <input type="text" name="lastname" id="lastname" />

            <label htmlFor="firstname">Prénom :</label>
            <input type="text" name="firstname" id="firstname" />
          </div>

          <div className="input">
            <label htmlFor="subject">
              Objet<span className="jaune">*</span> :
            </label>
            <input type="text" name="suject" id="subject" />
          </div>

          <div className="input">
            <label htmlFor="email">
              Email<span className="jaune">*</span> :
            </label>
            <input type="text" name="email" id="email" />
          </div>

          <div className="input">
            <label htmlFor="message">
              Message<span className="jaune">*</span> :
            </label>
            <input type="text" className="message" id="message" />
          </div>
          <p id="advert" className="jaune">
            * : Champ obligatoire
          </p>
        </form>
      </div>
    </section>
  );
}
