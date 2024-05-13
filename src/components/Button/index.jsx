function Button({ buttonName, icon }) {
  return (
    <div>
      <img src={icon} alt={`Ícone do botão: ${buttonName}`} />
      <p>{buttonName}</p>
    </div>
  );
}

export default Button;
