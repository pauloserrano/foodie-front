import styles from "./Form.module.css"

interface FormProps {
  children?: React.ReactNode
}

export function Form({ children }: FormProps) {
  return (
    <form className={styles["form-container"]}>
      { children }
    </form>
  )
}

interface FormInputProps {
  label: string,
  type: string,
  value: string,
  onChange: React.ChangeEvent<HTMLInputElement>,
  isRequired: boolean,
  children: React.ReactNode
}

export function FormInput({ label, type, value, onChange, isRequired, children }: FormInputProps) {
  return (
    <label htmlFor={label}>
      <span>{children}</span>
      <input 
        id={label}
        required={isRequired}
        type={type}
        value={value}
        onChange={() => {}}
      />
  </label>
  )
}