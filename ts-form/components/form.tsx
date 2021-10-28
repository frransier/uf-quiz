import { Profile } from '../types';
import { FormEvent, useState } from 'react'
import { post } from '../lib/fetch';
import useInput from '../lib/useInput';
import Input from './input';
import Checkbox from './checkbox';

export default function Form() {
  const [firstName, setFirstName, resetFirstName, firstNameError] = useInput("name")
  const [lastName, setLastName, resetLastName, lastNameError] = useInput("name")
  const [phoneNumber, setPhoneNumber, resetPhoneNumber, phoneNumberError] = useInput("phone")
  const [newsletter, setNewsletter] = useState(false)
  const [response, setResponse] = useState("")

  async function onSubmit(e: FormEvent): Promise<void> {
    e.preventDefault()
    const body = JSON.stringify({ firstName, lastName, phoneNumber, newsletter })
    await post("/api/submit", body)
      .then(res => {
        if (res.valid) {
          resetAll()
          setResponse("Thanks for signing up!")
        }
        if (!res.valid) {
          setAll(res.profile)
          setResponse("Please fill out the required fields")
        }
      }).catch(e => {
        console.error(e.log)
        setResponse(e.message)
      })
  }
  function resetAll() {
    resetFirstName()
    resetLastName()
    resetPhoneNumber()
    setNewsletter(false)
  }
  function setAll(profile: Profile) {
    const { firstName, lastName, phoneNumber } = profile
    setFirstName(firstName)
    setLastName(lastName)
    setPhoneNumber(phoneNumber)
  }

  return (
    <div style={{ width: 360, margin: "0 auto" }}>
      <form onSubmit={onSubmit} style={{ display: "grid" }}>
        <Input label="First Name" value={firstName} onChange={setFirstName} error={firstNameError} />
        <Input label="Last Name" value={lastName} onChange={setLastName} error={lastNameError} />
        <Input label="Phone Number" value={phoneNumber} onChange={setPhoneNumber} error={phoneNumberError} />
        <Checkbox label="Receive Newsletter" checked={newsletter} onChange={setNewsletter} />
        <button style={{ margin: 4 }} type="submit"> Save changes </button>
      </form>
      <div style={{ margin: 4 }}>{response}</div>
    </div>
  )
}


