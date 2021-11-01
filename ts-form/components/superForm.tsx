import useForm from "../lib/useForm";
import { IForm, Validation } from "../types";

export default function SuperForm(form: IForm) {
  form = {
    endpoint: "/api/submit",
    fields: [
      { key: "firstName", label: "First Name", type: "text", validation: Validation.Name },
      { key: "lastName", label: "Last Name", type: "text", validation: Validation.Name },
      { key: "phoneNumber", label: "Phone Number", type: "text", validation: Validation.Phone },
      { key: "receiveNewsletter", label: "Receive Newsletter", type: "checkbox" }
    ]
  }
  const { onChange, onSubmit, inputs } = useForm(form)
  return (
    <form>
      {inputs.map((input, i) => <InputSwitch input={input} index={i} />}

    </form>
  )
}