import "./Button.css";

function Button({ buttonName, icon }) {
  return (
    <div className="btn">
      <img
        src={icon}
        alt={`Ícone do botão: ${buttonName}`}
        className="icon-btn"
      />
      <p className="text-btn">{buttonName}</p>
    </div>
  );
}

export default Button;
