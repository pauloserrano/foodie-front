"use client"

import { useState } from "react"
import styles from "./CategoryForm.module.css"
import { createCategory } from "@/services"

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
      <label htmlFor="">
        <span>Name: </span>
        <input 
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="">
        <span>Description: </span>
        <textarea 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <button 
        type="submit"
        disabled={isLoading}
      >
        <span>
          {isLoading ? "Adding..." : "Create"}
        </span>
      </button>
    </form>
  )
}
