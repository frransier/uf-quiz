import { InputProps } from "../types";

export default function Input({ label, value, onChange, error }: InputProps) {

  return (
    <label style={{ display: "grid", margin: 4 }} aria-label={label}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {label}
        <div style={{ color: 'hotpink', marginLeft: 4 }}>{error}</div>
      </div>
      <input
        type="text"
        onChange={event => onChange(event.target.value)}
        onBlur={event => onChange(event.target.value)}
        value={value}
      />
    </label>
  );
}

