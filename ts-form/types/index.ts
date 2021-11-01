export interface Profile {
  firstName: string,
  lastName: string,
  phoneNumber: string
}

export interface IForm {
  endpoint: string,
  fields: FormField[]
}

export interface FormField {
  key: string,
  label: string,
  type: string,
  validation?: Validation
}

export enum Validation {
  Name = "name",
  Phone = "phone",
  None = "none"
}

export interface InputProps {
  onChange: (target: string) => void;
  value: string,
  label: string,
  error?: string
}
export interface CheckboxProps {
  onChange: (checked: boolean) => void;
  checked: boolean,
  label: string,
}