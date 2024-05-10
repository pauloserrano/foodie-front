"use client"

import { useState } from "react"
import styles from "./MenuForm.module.css"
import { createMenu } from "@/services"

export function MenuForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [form, setForm] = useState({
    name: "",
    description: "",
    isDaytime: "diurno",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await createMenu({
        ...form,
        description: form.description.length > 0 ? form.description : null,
        isDaytime: form.isDaytime == "diurno" ? false : true
      })
    
    } catch(error) {
      console.log(error)
    
    } finally {
      setIsLoading(false)
    }
  }

  const handleForm = ({ target: { name, value }}: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <form className={styles["form-container"]} onSubmit={handleSubmit}>
      <label className={styles["input-container"]}>
        <span>Name: </span>
        <input 
          required
          type="text"
          value={form.name}
          onChange={handleForm}
        />
      </label>
      <label className={styles["input-container"]}>
        <span>Description: </span>
        <textarea 
          value={form.description}
          onChange={handleForm}
        />
      </label>
      <label className={styles["input-container"]}>
        <span>Turno: </span>
        <select
          required
          value={form.isDaytime}
          onChange={handleForm}
        >
          <option value="diurno">Daytime</option>
          <option value="noturno">Nightime</option>
        </select>
      </label>

      <button className={styles["btn-submit"]} type="submit" disabled={isLoading}>
          {isLoading ? "Adding..." : "Create"}
      </button>
    </form>
  )
}
