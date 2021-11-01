import { IForm } from "../types";
import { useState } from 'react';


export default function useForm(form: IForm) {
  const { endpoint, fields } = form
  const [inputs, setInputs] = useState(fields)

  const onChange = (key: string, value: string): void => {

  }
  const onSubmit = () => {

  }
  return { onChange, onSubmit, inputs }
}