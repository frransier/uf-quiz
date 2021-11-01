import type { NextPage } from 'next'
import Form from '../components/form'
import { Validation } from '../types'
const Home: NextPage = () => {
  const form = {
    endpoint: "/api/submit",
    fields: [
      { key: "firstName", initialValue: "", label: "First Name", type: "text", validation: Validation.Name },
      { key: "lastName", initialValue: "", label: "Last Name", type: "text", validation: Validation.Name },
      { key: "phoneNumber", initialValue: "", label: "Phone Number", type: "text", validation: Validation.Phone },
      { key: "receiveNewsletter", initialValue: false, label: "Receive Newsletter", type: "checkbox", validation: Validation.None }
    ]
  }
  return (
    <Form endpoint={form.endpoint} fields={form.fields} />
  )
}

export default Home
