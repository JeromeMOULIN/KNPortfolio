import "./contact.css";
import ContactForm from "./parts/ContactForm";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="contentSection">
        <h3 className="orange underline">Ne soyez pas timide !</h3>
        <ContactForm />
      </div>
    </section>
  );
}
