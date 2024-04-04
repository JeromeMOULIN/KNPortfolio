import emailjs from "@emailjs/browser";
import { useRef } from "react";

import "./contactform.css";
export default function ContactForm() {
  const form = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_c4x5h3v", "template_o3mqmtf", form.current, {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      })
      .then(
        (sucess) => {
          alert("Votre message a bien été envoyé!");
          form.current.reset();
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={onSubmit}>
      <div className="names">
        <label htmlFor="lastname">
          Nom<span className="jaune">*</span> :
        </label>
        <input type="text" name="lastname" id="lastname" required />

        <label htmlFor="firstname">Prénom :</label>
        <input type="text" name="firstname" id="firstname" />
      </div>

      <div className="input">
        <label htmlFor="object">
          Objet<span className="jaune">*</span> :
        </label>
        <input type="text" name="object" id="object" required />
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
