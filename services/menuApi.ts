import { IMenu, IMenuCreate } from "@/types"

export async function getMenus(): Promise<IMenu[]> {
  const res = await fetch(`${process.env.DB_BASE_URL}/menu`, { cache: "no-store" })
 
  if (!res.ok) throw new Error('Request failed')
 
  return res.json()
}

export async function getCurrentMenu(): Promise<IMenu> {
  const res = await fetch(`${process.env.DB_BASE_URL}/menu/now`, { cache: "no-store" })
 
  if (!res.ok) {
    console.log(res)
    throw new Error('Request failed')
  }
 
  return res.json()
}

export async function createMenu(menu: IMenuCreate): Promise<IMenu> {
  const res = await fetch(`${process.env.DB_BASE_URL}/menu`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(menu),
    cache: "no-store"
  })

  if (!res.ok) throw new Error('Request failed')

  return res.json()
}