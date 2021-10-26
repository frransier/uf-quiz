import { CheckboxInputProps } from "../types";

function CheckBoxInput({ onChange, ...props }: CheckboxInputProps) {
  return (
    <input
      onChange={event => onChange("receiveNewsletter", event.target.checked)}
      {...props}
    />
  );
}

export default CheckBoxInput;