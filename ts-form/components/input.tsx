import { InputProps } from "../types";

export default function Input({ label, inputKey, type, value, onChange, error }: InputProps) {
  return (
    <label style={{ display: "grid", margin: 4 }} aria-label={label}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {label}
        <div style={{ color: 'hotpink', marginLeft: 4 }}>{error}</div>
      </div>
      <input
        type={type}
        onChange={event => onChange(inputKey, event.target.value)}
        onBlur={event => onChange(inputKey, event.target.value)}
        value={value}
      />
    </label>
  );
}

