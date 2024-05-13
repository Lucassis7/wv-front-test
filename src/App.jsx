import { useState } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import "./App.css";
import clipboardIcon from "./assets/clipboard-icon.svg";
import buildingIcon from "./assets/building-icon.svg";
import listIcon from "./assets/list-icon.svg";
import mapIcon from "./assets/map-icon.svg";
import phoneIcon from "./assets/phone-icon.svg";
import gearIcon from "./assets/gear-icon.svg";

function App() {
  return (
    <>
      <main>
        {/* Hero container */}
        <div></div>

        {/* Option cards container */}
        <div>
          <h1>Como ficam meus benefícios?</h1>
          <div className="cards">
            <Card cardName="Plano de Saúde" icon={clipboardIcon} />
            <Card cardName="Previdência Privada" icon={buildingIcon} />
          </div>
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
