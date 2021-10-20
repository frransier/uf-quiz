type InputProps = {
  onChange: (name: string, value: boolean) => void;
  type: string,
  name: string,
  checked: boolean,
};
function CheckBoxInput({ onChange, ...props }: InputProps) {
  return (
    <input
      onChange={event => onChange("receiveNewsletter", event.target.checked)}
      {...props}
    />
  );
}

export default CheckBoxInput;