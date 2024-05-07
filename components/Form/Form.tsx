"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import styles from "./Form.module.css"

export function Form() {
  const router = useRouter()
  const [name, setName] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [lorem, setLorem] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const category = { 
      name, 
      description: description.length > 0 ? description : null
    }

    const res = await fetch("http://localhost:4000/category", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(category)
    })

    if (res.status === 201) {
      console.log("deu bom")
    
    } else {
      console.log("iiiih")
    }

    setIsLoading(false)
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
      <label htmlFor="">
        <span>Lorem: </span>
        <select
          value={lorem}
          onChange={e => setLorem(e.target.value)}
        >
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
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
