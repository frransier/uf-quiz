import { State, Props } from "../types";
import React, { Component } from 'react'
import TextInput from './textInput';
import CheckBoxInput from './checkBoxInput';

// "Server-side" code
const mockPost = (profile: State): Promise<any> => new Promise(resolve => {
  const errors = []

  if (!profile.firstName) errors.push({ path: 'firstName', message: 'Missing first name!' })
  if (!profile.lastName) errors.push({ path: 'lastName', message: 'Missing last name!' })
  if (!profile.phoneNumber) {
    errors.push({ path: 'phoneNumber', message: 'Missing phone number!' })
  } else if (profile.phoneNumber.replace(/[^0-9]/, '').length !== 8) {
    errors.push({ path: 'phoneNumber', message: 'Phone number must be 8 digits' })
  }

  if (errors.length > 0) {
    resolve({ errors })
  }
  else {
    resolve({ profile })
  }
})

class ProfileForm extends Component<Props, State> {
  state = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    receiveNewsletter: false,
    errors: null,
  };
  onInputChange = (name: string, value: string | boolean): void => {
    this.setState((prevState) => ({
      ...prevState,
      [name]: value
    }))
  };

  onSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault()
    this.setState({ errors: null })
    const response = await mockPost(this.state)
    this.setState(response)
  };


  render() {
    const { firstName, lastName, phoneNumber, receiveNewsletter, errors } = this.state

    return (
      <form onSubmit={this.onSubmit} style={{ display: "grid", gridTemplateColumns: "1fr" }}>
        <label> First name: <TextInput errors={errors} type="text" name="firstName" aria-label="First Name" value={firstName} onChange={this.onInputChange} /></label>
        <label> Last name: <TextInput errors={errors} type="text" name="lastName" aria-label="Last Name" value={lastName} onChange={this.onInputChange} /> </label>
        <label> Phone number: <TextInput errors={errors} type="tel" name="phoneNumber" aria-label="Phone Number" value={phoneNumber} onChange={this.onInputChange} /> </label>
        <label> Receive newsletter ? <CheckBoxInput type="checkbox" name="receiveNewsletter" aria-label="Receive Newsletter" checked={receiveNewsletter} onChange={this.onInputChange} /> </label>
        <button type="submit" > Save changes </button>
      </form>
    )
  }
}

export default ProfileForm

