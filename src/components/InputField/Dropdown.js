import "./style.css";

const Dropdown = ({
  showLabel,
  icon,
  onChange,
  value,
  placeholder,
  options,
  styles,
}) => {
  return (
    <div>
      {showLabel && <p className="dropdown-label">{[placeholder]}</p>}
      <div className="inputfield-container" style={{ ...styles }}>
        {icon && <div className="inputfield-icon">{icon}</div>}
        <select value={value} onChange={(event) => onChange(event)}>
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option value={opt} key={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
