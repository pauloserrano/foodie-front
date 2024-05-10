"use client"

import { useState } from "react"
import { createCategory } from "@/services"
import styles from "../Form/Form.module.css"

export function CategoryForm() {
  const [name, setName] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await createCategory({
        name,
        description: description.length > 0 ? description : null
      })

    } catch(error) {
      console.log(error)
    
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className={styles["form-container"]} onSubmit={handleSubmit}>
      <label className={styles["input-container"]}>
        <span>Name</span>
        <input 
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className={styles["input-container"]}>
        <span>Description</span>
        <textarea 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <button className={styles["btn-submit"]} type="submit" disabled={isLoading}>
          {isLoading ? "Adding..." : "Create"}
      </button>
    </form>
  )
}
