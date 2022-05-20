import Styles from "./UnderConstruction.module.css";
import { useState } from "react";
export default function UnderConstruction() {
  const [showPopup, setShowPopup] = useState(true);
  const togglePopup = () => {
    setShowPopup(!showPopup);
    console.log("triggered");
  };
  if (!showPopup) {
    return null;
  }
  return (
    <div className={Styles.backdrop} onClick={togglePopup}>
      <div className={Styles.container} onClick={togglePopup}>
        <h1>Under Construction</h1>
        <p>
          This page is currently still in development and will have missing
          features, weird buttons, is likely not responsive, and will contain
          missing elements. Feel free to still take a look around but I just
          wanted to give ya a heads up
        </p>
        <h2>Click this Popup to view site</h2>
      </div>
    </div>
  );
}
