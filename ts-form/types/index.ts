export interface Profile {
  firstName: string,
  lastName: string,
  phoneNumber: string
}

export interface InputProps {
  onChange: (target: string) => void;
  value: string,
  label: string,
  error: string | null
}
export interface CheckboxProps {
  onChange: (checked: boolean) => void;
  checked: boolean,
  label: string,
}