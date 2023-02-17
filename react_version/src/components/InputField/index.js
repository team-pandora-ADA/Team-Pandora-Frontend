import "./style.css";

const InputField = ({ icon, name, onChange, value, placeholder, type }) => {
  return (
    <div className="inputfield-container">
      {icon && <div className="inputfield-icon">{icon}</div>}
      <input
        placeholder={placeholder}
        value={value}
        name={name}
        type={type ? type : "text"}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default InputField;
