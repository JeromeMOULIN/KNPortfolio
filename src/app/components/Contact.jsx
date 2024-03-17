import { useInView } from "react-intersection-observer";
import "./contact.css";
import ContactForm from "./parts/ContactForm";
import { useEffect } from "react";

export default function Contact() {
  const { ref: contact, inView: isOnScreen } = useInView({});

  useEffect(() => {
    // underline the project nav link when it is seen
    const element = document.getElementById("contact-nav");

    if (isOnScreen) {
      element.classList.add("navUnderline--expand");
    }
    if (!isOnScreen) {
      element.classList.remove("navUnderline--expand");
    }
  }, [isOnScreen]);

  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="contentSection" ref={contact}>
        <h3 className="orange underline">Ne soyez pas timide !</h3>
        <ContactForm />
      </div>
    </section>
  );
}
