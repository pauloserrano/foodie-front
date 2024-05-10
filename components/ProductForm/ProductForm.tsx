"use client"

import { useState } from "react"
import { ICategory, IMenu } from "@/types"
import styles from "./ProductForm.module.css"
import { createProduct } from "@/services"

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
    menuId: menus[0].id,
    categoryId: categories[0].id
  })


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    try {
      setIsLoading(true)

      await createProduct({
        ...form,
        price: ++form.price,
        description: form.description.length > 0 ? form.description : null
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
      <label className={styles["input-container"]}>
        <span>Name: </span>
        <input 
          required
          type="text"
          name="name"
          value={form.name}
          onChange={handleForm}
        />
      </label>

      <label className={styles["input-container"]}>
        <span>Description: </span>
        <textarea 
          required
          name="description"
          value={form.description}
          onChange={handleForm}
        />
      </label>
      
      <label className={styles["input-container"]}>
        <span>Image URL: </span>
        <input 
          required
          type="text"
          name="imageSrc"
          value={form.imageSrc}
          onChange={handleForm}
        />
      </label>

      <label className={styles["input-container"]}>
        <span>Price: </span>
        <input 
          required
          type="number"
          name="price"
          value={form.price}
          onChange={handleForm}
        />
      </label>

      <label className={styles["input-container"]}>
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
      
      <label className={styles["input-container"]}>
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

      <button className={styles["btn-submit"]} type="submit" disabled={isLoading}>
          {isLoading ? "Adding..." : "Create"}
      </button>
    </form>
  )
}
