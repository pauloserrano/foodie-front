import { ICategory, ICategoryCreate } from "@/types"

export async function getCategories(): Promise<ICategory[]> {
  const res = await fetch(`${process.env.DB_BASE_URL}/category`, { cache: "no-store" })
 
  if (!res.ok) throw new Error('Request failed')
 
  return res.json()
}

export async function getCategoryById(id: string): Promise<ICategory> {
  const res = await fetch(`${process.env.DB_BASE_URL}/category/${id}`, { cache: "no-store" })
 
  if (!res.ok) throw new Error('Request failed')
 
  return res.json()
}

export async function createCategory(category: ICategoryCreate): Promise<ICategory> {
  const res = await fetch(`${process.env.DB_BASE_URL}/category`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(category),
    cache: "no-store"
  })

  if (!res.ok) throw new Error('Request failed')

  return res.json()
}