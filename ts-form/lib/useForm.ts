import { IForm, Validation } from "../types";
import { FormEvent, useEffect, useState } from 'react';
import validate from "./validate";
import { post } from "./fetch";


export default function useForm({endpoint, fields}: IForm) {
  const initialState = fields.map(f =>  ({
    [f.key]: f.initialValue,
    error: undefined,
    validation: f.validation
  }))
  
  const [state, setState] = useState<any[]>(initialState)
  const [response, setResponse] = useState("")
  const [hasErrors, setHasErrors] = useState(true)
  useEffect(() => {
    const relevantState = state.filter(x => x.validation !== Validation.None)
    setHasErrors(!relevantState.every(x => x.error === null) || relevantState.some(x => x.error === undefined))
  },[state])

  const onChange = (key: string, value: string | boolean): void => {
    setState(prevState => {
      const field = fields.find(x => x.key === key)
      if(field) {
        const filtered = prevState.filter(x => !x.hasOwnProperty(key))
        const error = field.validation ? validate(field.validation, value) : null 
        const update = {...prevState.find(x => x.hasOwnProperty(key)), [key]: value, error: error}
        return [...filtered, update]
      }
      else return prevState
    })
  }
  const reset = () => {
    setState(initialState)
  }
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()    
    await post(endpoint, JSON.stringify(state)).then(() => {
        reset()
        setResponse("Thanks for signing up!")
    }).catch(e => {
      if(e.status === 400) {
        setResponse("Please fill out the required fields")
      }
      else
        setResponse("Unkown server error. Contact support")
    })
    
    
    
  }
  return { onChange, onSubmit, state, response, hasErrors }
}