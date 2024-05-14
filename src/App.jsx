import { useState } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import Popup from "./components/Popup";
import "./App.css";
import heroBackground from "./assets/hero-background.png";
import clipboardIcon from "./assets/clipboard-icon.svg";
import buildingIcon from "./assets/building-icon.svg";
import circlesImage from "./assets/circles-image.svg";
import listIcon from "./assets/list-icon.svg";
import mapIcon from "./assets/map-icon.svg";
import phoneIcon from "./assets/phone-icon.svg";
import gearIcon from "./assets/gear-icon.svg";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      {/* Popup element */}
      {showPopup && <Popup onClose={togglePopup} />}

      <main>
        {/* Hero container */}
        <div className="hero">
          <img
            src={heroBackground}
            alt="Pessoas felizes em reunião."
            className="hero-bkg"
          />
          <p className="close-btn">&#x2715;</p>
        </div>

        {/* Option cards container */}
        <div className="benefits">
          <h1>Como ficam meus benefícios?</h1>
          <div className="cards">
            <Card
              cardName="Plano de Saúde"
              icon={clipboardIcon}
              togglePopup={togglePopup}
            />
            <Card
              cardName="Previdência Privada"
              icon={buildingIcon}
              togglePopup={togglePopup}
            />
          </div>
          <img
            src={circlesImage}
            alt="Imagem de círculos divertidos em canto inferior direito."
          />
        </div>

        {/* Footer buttons container */}
        <div className="buttons">
          <Button buttonName="Lista" icon={listIcon} />
          <Button buttonName="Mapa" icon={mapIcon} />
          <Button buttonName="Suporte" icon={phoneIcon} />
          <Button buttonName="Ajustes" icon={gearIcon} />
        </div>
      </main>
    </>
  );
}

export default App;
