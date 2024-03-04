import React from "react";
import Nav from "./Nav";
import Image from "next/image";

import "./header.css";
export default function Header() {
  return (
    <header>
      <Image
        src="/assets/img/icon/icon_KaNa.jpeg"
        height={100}
        width={100}
        alt="logo représentant un corbeau, ailes déployée. Devant un soleil"
      />
      <Nav />
    </header>
  );
}
