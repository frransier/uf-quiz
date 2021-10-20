type Props = {
  onChange: (name: string, value: string) => void;
  type: string,
  name: string,
  value: string,
  errors: Array<{ path: string, message: string }> | null,
};
function TextInput({ onChange, errors, ...props }: Props) {
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