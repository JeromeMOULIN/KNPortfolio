import Link from "next/link";
import React from "react";

import "./button.css";

export default function Button(props) {
  return (
    <button className={props.className}>
      <Link href={props.adress} target="_blank">
        {props.name}
      </Link>
    </button>
  );
}
