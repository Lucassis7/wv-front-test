import "./Card.css";

function Card({ cardName, icon, togglePopup }) {
  return (
    <div className="card" onClick={togglePopup}>
      <img
        src={icon}
        alt={`Ícone do cartão ${cardName}.`}
        className="img-card"
      />
      <p className="text-card">{cardName}</p>
    </div>
  );
}

export default Card;
