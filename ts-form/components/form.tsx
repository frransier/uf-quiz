import { FormEvent, useState } from 'react'
import useInput from '../lib/useInput';
import fetch from '../lib/fetch';
import Input from './input';
import Checkbox from './checkbox';
import { Profile } from '../types';

export default function Form() {
  const [firstName, setFirstName, resetFirstName, firstNameError] = useInput("name")
  const [lastName, setLastName, resetLastName, lastNameError] = useInput("name")
  const [phoneNumber, setPhoneNumber, resetPhoneNumber, phoneNumberError] = useInput("phone")
  const [newsletter, setNewsletter] = useState(false)
  const [response, setResponse] = useState("")

  async function onSubmit(e: FormEvent): Promise<void> {
    e.preventDefault()
    const profile = { firstName: firstName, lastName, phoneNumber }
    const submission = JSON.stringify({ profile, newsletter })
    await fetch("/api/form", submission).then(res => {
      if (res.valid) {
        resetAll()
        setResponse("Thanks for signing up!")
      }
      if (!res.valid) {
        setAll(res.profile)
        setResponse("Please fill out the required fields")
      }
    }).catch(e => {
      const err = e.message
      console.error(err)
      setResponse(err)
    })
  }
  function resetAll() {
    resetFirstName()
    resetLastName()
    resetPhoneNumber()
    setNewsletter(false)
  }
  function setAll(profile: Profile) {
    setFirstName(profile.firstName)
    setLastName(profile.lastName)
    setPhoneNumber(profile.phoneNumber)
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
      {response && <div style={{ margin: 4 }}>{response}</div>}
    </div>
  )
}


