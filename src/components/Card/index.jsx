function Card({ cardName, icon }) {
  return (
    <div>
      <img src={icon} alt={`Ícone do cartão ${cardName}.`} />
      <p>{cardName}</p>
    </div>
  );
}

export default Card;
