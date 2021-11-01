import { FormField } from '../types/index';
import Input from './input';
import Checkbox from './checkbox';

export default function SuperInput(input: FormField, index: number, onChange: (target: string) => void, value: string, error?: string) {
  switch (input.type) {
    case "text":
      return <Input onChange={onChange} label={input.label} value={value} error={error} />
    case "checkbox":
      return <Checkbox />

    default:
      break;
  }

}