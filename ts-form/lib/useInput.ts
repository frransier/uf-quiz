import { useState } from "react"
import validate from "./validate"

export default function useInput(validationKey: string): [string, (target: string) => void, () => void, string | null] {
  const [state, setState] = useState("")
  const [error, setError] = useState<string | null>(null)

  function onChange(target: string) {
    setState(target)
    setError(validate(validationKey, target))
  }
  function reset() {
    setState("")
    setError(null)
  }

  return [state, onChange, reset, error]
}