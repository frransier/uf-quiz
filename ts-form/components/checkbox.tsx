import {  InputProps } from "../types";

export default function Checkbox({ inputKey, label, checked, onChange }: InputProps) {

  return (
    <label style={{ display: "flex", margin: 4 }} aria-label={label}>
      {label}
      <input
        type="checkbox"
        onChange={event => onChange(inputKey, event.target.checked)}
        checked={checked}
      />
    </label>
  );
}

