import { SetStateAction } from "react"

export default function validate(key: string, value: any) {
  switch (key) {
    case "name":
      return validateName(value)
    case "phone":
      return validatePhone(value)
    case "none":
      return null
    default:
      console.error(`Unknown validation key: ${key}`)
      return "Something is wrong. Contact support"
  }
}

function validatePhone(phoneNumber: string): SetStateAction<string | null> {
  if (!phoneNumber) {
    return 'Required'
  } else if (phoneNumber.replace(/[^0-9]/, '').length !== 8) {
    return 'Must be 8 digits'
  } else return null
}

function validateName(name: string): SetStateAction<string | null> {
  return name ? null : "Required"
}