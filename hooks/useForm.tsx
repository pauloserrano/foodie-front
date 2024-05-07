"use client"

import { useState } from "react"

export function useForm(initial={}) {
  const [form, setForm] = useState(initial)

  function handleForm({ target: { name, value }}: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [name]: value
    })
  }

  return [form, handleForm]
}
