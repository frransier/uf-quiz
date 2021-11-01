import { InputProps } from "../types";

export default function Checkbox({ inputKey, type, label, checked, onChange }: InputProps) {

  return (
    <label style={{ display: "flex", margin: 4 }} aria-label={label}>
      {label}
      <input
        type={type}
        onChange={event => onChange(inputKey, event.target.checked)}
        checked={checked}
      />
    </label>
  );
}

