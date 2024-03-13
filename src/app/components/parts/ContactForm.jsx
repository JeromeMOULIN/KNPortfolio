"use client";
import "./contactform.css";
export default function ContactForm() {
  const send = (e) => {
    alert("rentré");
  };
  return (
    <form onSubmit={send}>
      <div className="names">
        <label htmlFor="lastname">
          Nom<span className="jaune">*</span> :
        </label>
        <input type="text" name="lastname" id="lastname" required />

        <label htmlFor="firstname">Prénom :</label>
        <input type="text" name="firstname" id="firstname" />
      </div>

      <div className="input">
        <label htmlFor="subject">
          Objet<span className="jaune">*</span> :
        </label>
        <input type="text" name="suject" id="subject" required />
      </div>

      <div className="input">
        <label htmlFor="email">
          Email<span className="jaune">*</span> :
        </label>
        <input type="text" name="email" id="email" required />
      </div>

      <div className="input">
        <label htmlFor="message">
          Message<span className="jaune">*</span> :
        </label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
      </div>

      <div className="bottomform">
        <button type="submit">Envoyer</button>

        <p id="advert" className="jaune">
          * : Champ obligatoire
        </p>
      </div>
    </form>
  );
}
