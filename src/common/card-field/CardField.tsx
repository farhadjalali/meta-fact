import { FC, useState, ChangeEvent, useEffect } from 'react'
import './style.scss'

type Props = {
  defaultValue?: string
  name: string
  label: string
  validation?: unknown
  onChange: (ev: { name: string; newValue: string | undefined }) => void
}

export const CardField: FC<Props> = ({ name, label, validation, defaultValue, onChange }) => {
  const [editMode, setEditMode] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
    if (validation) {
      let valid = true
      if (validation instanceof RegExp) {
        valid = validation.test(event.target.value)
      } else if (Array.isArray(validation)) {
        valid = validation.includes(event.target.value)
      }
      setHasError(!valid)
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && !hasError) {
      setEditMode(false)
      onChange({ newValue: value, name })
    }

    if (event.key === 'Escape') {
      setEditMode(false)
      setValue(defaultValue)
    }
  }

  return (
    <div className="card-field">
      <label>{label}</label>
      {editMode ? (
        <input
          className={hasError ? 'with-error' : ''}
          autoFocus
          onBlur={() => setEditMode(false)}
          type="text"
          name={name}
          value={value}
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
        />
      ) : (
        <div className="card-text" onClick={() => setEditMode(true)}>
          {defaultValue}
        </div>
      )}
    </div>
  )
}
