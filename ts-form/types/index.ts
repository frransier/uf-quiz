export interface State  {
  firstName: string,
  lastName: string,
  phoneNumber: string,
  receiveNewsletter: boolean,
  errors: Error[] | null,
}
export interface Error  {
  path: string,
  message: string
}
export interface Props  {}

export interface TextInputProps {
  onChange: (name: string, value: string | boolean) => void;
  "aria-label": string,
  type: string,
  name: string,
  value: string,
  errors: Error[] | null,
};

export interface CheckboxInputProps {
  onChange: (name: string, value: boolean) => void;
  "aria-label": string,
  type: string,
  name: string,
  checked: boolean
};
