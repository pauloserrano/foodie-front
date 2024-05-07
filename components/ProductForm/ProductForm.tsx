"use client"

import { useState } from "react"
import { ICategory, IMenu } from "@/types"
import styles from "./ProductForm.module.css"

interface ProductFormProps {
  categories: ICategory[],
  menus: IMenu[]
}

export function ProductForm({ categories, menus }: ProductFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [form, setForm] = useState({
    name: "",
    description: "",
    imageSrc: "",
    price: 0,
    menuId: "",
    categoryId: ""
  })


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    try {
      setIsLoading(true)

      const product = {
        ...form,
        price: ++form.price,
        description: form.description.length > 0 ? form.description : null
      }

      console.log(product)

      await fetch("http://localhost:4000/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
        cache: "no-store"
      })
      
    } catch (error) {
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
      <label htmlFor="">
        <span>Name: </span>
        <input 
          required
          type="text"
          name="name"
          value={form.name}
          onChange={handleForm}
        />
      </label>

      <label htmlFor="">
        <span>Description: </span>
        <textarea 
          required
          name="description"
          value={form.description}
          onChange={handleForm}
        />
      </label>
      
      <label htmlFor="">
        <span>Image URL: </span>
        <input 
          required
          type="text"
          name="imageSrc"
          value={form.imageSrc}
          onChange={handleForm}
        />
      </label>

      <label htmlFor="">
        <span>Price: </span>
        <input 
          required
          type="number"
          name="price"
          value={form.price}
          onChange={handleForm}
        />
      </label>

      <label htmlFor="">
        <span>Menu: </span>
        <select
          required
          name="menuId"
          value={form.menuId}
          onChange={handleForm}
        >
          {menus.map(menu => (
            <option key={menu.id} value={menu.id}>{menu.name}</option>
          ))}
        </select>
      </label>
      
      <label htmlFor="">
        <span>Category: </span>
        <select
          required
          name="categoryId"
          value={form.categoryId}
          onChange={handleForm}
        >
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
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
