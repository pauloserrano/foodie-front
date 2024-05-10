import { ProductForm } from "@/components";
import { ICategory, IMenu } from "@/types";
import { getCategories, getMenus } from "@/services";
import styles from "./style.module.css"


export default async function NewProduct() {
  const categories: ICategory[] = await getCategories()
  const menus: IMenu[] = await getMenus()

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Create new Product</h3>
      <ProductForm 
        categories={categories}
        menus={menus}
      />
    </div>
  )
}
