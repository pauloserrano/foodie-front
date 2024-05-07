import { ProductForm } from "@/components/ProductForm/ProductForm";
import { ICategory, IMenu } from "@/types";

async function getCategories() {
  const res = await fetch("http://localhost:4000/category", { cache: "no-store" })
  return await res.json()
}

async function getMenus() {
  const res = await fetch("http://localhost:4000/menu", { cache: "no-store" })
  return await res.json()
}


// Uma página de criação e produtos e categorias.
export default async function NewProduct() {
  const categories: ICategory[] = await getCategories()
  const menus: IMenu[] = await getMenus()

  return (
    <div>
      <h3>Create new Product</h3>
      <ProductForm 
        categories={categories}
        menus={menus}
      />
    </div>
  )
}
