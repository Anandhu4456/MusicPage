import React from "react";
import LeftContent from "./LeftContent";


export default function Container() {
  return <div>
    <div className="wrapper">
    <nav>
      <ul className="items">
        <li>Download</li>
        <li>About</li>
        <li>Support</li>
        <li>Feature</li>
        <button>SIGN UP</button>
      </ul>
    </nav>
    <LeftContent />
    </div>
  </div>;
}
