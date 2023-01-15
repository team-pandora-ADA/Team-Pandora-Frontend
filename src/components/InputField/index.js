import "./style.css";

const InputField = ({
  textArea,
  icon,
  name,
  onChange,
  value,
  placeholder,
  type,
  showLabel,
  styles,
}) => {
  return (
    <div>
      {showLabel && <p className="dropdown-label">{[placeholder]}</p>}
      <div className="inputfield-container" style={{ ...styles }}>
        {icon && <div className="inputfield-icon">{icon}</div>}
        {textArea ? (
          <textarea
            placeholder={placeholder}
            value={value}
            name={name}
            rows={5}
            type={type ? type : "text"}
            onChange={(e) => onChange(e)}
          />
        ) : (
          <input
            placeholder={placeholder}
            value={value}
            name={name}
            type={type ? type : "text"}
            onChange={(e) => onChange(e)}
          />
        )}
      </div>
    </div>
  );
};

export default InputField;
