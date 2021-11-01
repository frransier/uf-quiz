import useForm from "../lib/useForm";
import { IForm } from "../types";
import Checkbox from "./checkbox";
import Input from "./input";

export default function Form(form: IForm) {
  const { onChange, onSubmit, state, response, hasErrors } = useForm(form)

  return (
    <form onSubmit={onSubmit}>
      {form.fields.map(field => {
        const f = state.find(x => x.key === field.key)
        const sharedProps = {
          key: f.label,
          label: f.label,
          onChange: onChange,
          inputKey: f.key,
          type: f.type
        }
        switch (field.type) {
          case "text":
            return <Input {...sharedProps} value={f.value} error={f.error} />
          case "checkbox":
            return <Checkbox {...sharedProps} checked={f.value} />
        }
      })}
      <button disabled={hasErrors} type="submit">Submit</button>
      <div>{response}</div>
    </form>
  )
}