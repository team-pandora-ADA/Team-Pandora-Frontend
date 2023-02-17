import "./style.css";

const Dropdown = ({ icon, onChange, value, placeholder, options }) => {
  return (
    <div className="inputfield-container">
      {icon && <div className="inputfield-icon">{icon}</div>}
      <select value={value} onChange={(event) => onChange(event)}>
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
