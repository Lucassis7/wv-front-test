import "./Popup.css";
import playImage from "../../assets/play-image.svg";

function Popup({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup-content">
          <p onClick={onClose} className="popup-close-btn">
            &#x2715;
          </p>
          <div className="video-content">
            <img src={playImage} alt="Botão de play do videobot." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
