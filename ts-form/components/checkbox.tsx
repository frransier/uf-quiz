import { CheckboxProps } from "../types";

export default function Checkbox({ label, checked, onChange }: CheckboxProps) {

  return (
    <label style={{ display: "flex", margin: 4 }} aria-label={label}>
      {label}
      <input
        type="checkbox"
        onChange={event => onChange(event.target.checked)}
        checked={checked}
      />
    </label>
  );
}

