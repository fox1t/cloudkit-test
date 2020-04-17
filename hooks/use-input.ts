import { useState } from 'react'

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    setValue,
    onChange: event => {
      if (event.target.files[0]) {
        setValue(event.target.files[0])
      } else {
        setValue(event.target.value)
      }
    },
    reset: () => setValue(initialValue),
  }
}
