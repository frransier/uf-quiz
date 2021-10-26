import { TextInputProps } from "../types";

function TextInput({ onChange, errors, ...props }: TextInputProps) {
  const error = errors && errors.find((e) => e.path === props.name)

  return (
    <>
      <input
        onChange={event => onChange(event.target.name, event.target.value)}
        {...props}
      />
      {error && <div style={{ color: 'hotpink' }}>{error.message}</div>}
    </>
  );
}

export default TextInput;