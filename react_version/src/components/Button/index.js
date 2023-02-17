import "./style.css";

const Button = ({ icon, onClick, text, solid, type }) => {
  return (
    <button
      className={`button ${solid ? "solidBtn" : ""} `}
      onClick={onClick}
      type={type ? type : "button"}
    >
      {icon && <div className="inputfield-icon">{icon}</div>}
      <p>{text}</p>
    </button>
  );
};

export default Button;
