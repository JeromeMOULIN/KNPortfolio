"use client";
import "./footer.css";

const Footer = () => {

  // Footer animation, toggle classes when clicked
  const wrapperFooter = () => {
    document.querySelector("#footer").classList.toggle("unWrap");
    document.querySelector("#arrowFooter").classList.toggle("rotate");
  };

  return (
    <footer id="footer">
      <button onClick={() => wrapperFooter()}>
        <span id="arrowFooter">▲</span>
      </button>

      <p>
        MOULIN Jérôme <br /> 06 80 73 81 38 <br /> 20 route de genas <br />
        69003, Lyon <br /> j.moulin89@laposte.net
      </p>

      <p>Désigné et codé par Jérôme MOULIN - Tous droit réservé</p>
    </footer>
  );
};

export default Footer;
