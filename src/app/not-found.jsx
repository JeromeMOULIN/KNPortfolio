import Link from "next/link";

import "./404.css";

export default function NotFound() {
  return (
    <section>
      <h2 className="errorTitle">404</h2>
      <p className="ivory">
        Vous vous etes trompé ou c&apos;est délibérément que vous vous baladez
        là ou vous n&apos;avez rien a y faire ?
      </p>
      <Link className="underline salmon" href={"/"}>
        Allez Hop tu sort ➠{" "}
      </Link>
    </section>
  );
}
