import "./Card.css";

function Card({ cardName, icon }) {
  return (
    <div className="card">
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
