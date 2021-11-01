export interface IForm {
  endpoint: string,
  fields: FormField[]
}

export interface FormField {
  key: string,
  label: string,
  value?: string | boolean,
  type: string,
  validation?: Validation
  error?: string | null
}

export enum Validation {
  Name = "name",
  Phone = "phone",
  None = "none"
}

export interface InputProps {
  onChange: (key: string, value: string | boolean) => void;
  inputKey: string,
  value?: string,
  label: string,
  type: string,
  checked?: boolean,
  error?: string
}