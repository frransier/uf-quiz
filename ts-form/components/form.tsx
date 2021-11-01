import useForm from "../lib/useForm";
import { IForm } from "../types";
import Checkbox from "./checkbox";
import Input from "./input";

export default function Form(form: IForm) {
  const { onChange, onSubmit, state, response, hasErrors } = useForm(form)
  
  return (
    <form onSubmit={onSubmit}>
      {form.fields.map(field => {
        var f;
        switch (field.type) {          
        case "text":
          f = state.find(x => x.hasOwnProperty(field.key))
          return <Input 
                    key={field.label} 
                    onChange={onChange} 
                    label={field.label} 
                    inputKey={field.key} 
                    value={f[field.key]} 
                    error={f.error} 
                  />
        case "checkbox":
          f = state.find(x => x.hasOwnProperty(field.key))
          return <Checkbox 
                  key={field.label}
                  inputKey={field.key} 
                  onChange={onChange}
                  label={field.label}
                  checked={f[field.key]}
                />
      }
      })}
      <button disabled={hasErrors} type="submit">Submit</button>
      <div>{response}</div>
    </form>
  )
}