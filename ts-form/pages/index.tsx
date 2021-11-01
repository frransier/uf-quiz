import type { NextPage } from 'next'
import Form from '../components/form'
import { Validation } from '../types'
const Home: NextPage = () => {
  const form = {
    endpoint: "/api/submit",
    fields: [
      { key: "firstName", value: "", label: "First Name", type: "text", validation: Validation.Name, error: undefined },
      { key: "lastName", value: "", label: "Last Name", type: "text", validation: Validation.Name, error: undefined },
      { key: "phoneNumber", value: "", label: "Phone Number", type: "text", validation: Validation.Phone, error: undefined },
      { key: "receiveNewsletter", value: false, label: "Receive Newsletter", type: "checkbox", validation: Validation.None, error: null }
    ]
  }
  return (
    <Form endpoint={form.endpoint} fields={form.fields} />
  )
}

export default Home
