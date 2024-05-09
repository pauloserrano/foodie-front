import { IProduct, IProductCreate } from "@/types"

export async function getProducts(): Promise<IProduct[]> {
  const res = await fetch(`${process.env.DB_BASE_URL}/product`, { cache: "no-store" })
 
  if (!res.ok) throw new Error('Request failed')
 
  return res.json()
}

export async function getProductById(id: string): Promise<IProduct> {
  const res = await fetch(`${process.env.DB_BASE_URL}/product/${id}`, { cache: "no-store" })
 
  if (!res.ok) throw new Error('Request failed')
 
  return res.json()
}

export async function createProduct(product: IProductCreate): Promise<IProduct> {
  const res = await fetch(`${process.env.DB_BASE_URL}/product`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
    cache: "no-store"
  })

  if (!res.ok) throw new Error('Request failed')

  return res.json()
}
