import { IForm } from "../types";
import { FormEvent, useEffect, useState } from 'react';
import validate from "./validate";
import { post } from "./fetch";


export default function useForm({ endpoint, fields }: IForm) {
  const [state, setState] = useState<any[]>(fields)
  const [response, setResponse] = useState("")
  const [hasErrors, setHasErrors] = useState(true)

  useEffect(() => {
    setHasErrors(!state.every(x => x.error === null) || state.some(x => x.error === undefined))
  }, [state])

  const onChange = (key: string, value: string | boolean): void => {
    setState(prevState => {
      const field = state.find(x => x.key === key)
      const update = { ...field, value: value, error: validate(field.validation, value) }
      return [...prevState.filter(x => x.key !== key), update]
    })
  }
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await post(endpoint, JSON.stringify(state))
      setState(fields)
      setResponse("Thanks for signing up!")
    }
    catch (e: any) {
      if (e.status === 400)
        setResponse("Please fill out the required fields")
      else {
        setResponse("Unknown server error. Contact support")
      }
    }
  }
  return { onChange, onSubmit, state, response, hasErrors }
}