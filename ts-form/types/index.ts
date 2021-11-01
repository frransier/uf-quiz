export interface IForm {
  endpoint: string,
  fields: FormField[]
}

export interface FormField {
  key: string,
  label: string,
  initialValue?: string | boolean,
  type: string,
  validation?: Validation
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
  checked?: boolean,
  error?: string
}