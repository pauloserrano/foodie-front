import { Product } from "@/components"
import { getCategoryById, getCategories } from "@/services"
import { ICategory } from "@/types"
import styles from "./Category.module.css"

async function getCategoriesProducts() {
  const categories = await getCategories()

  const categoriesWithProducts: ICategory[] = []
  for(let i = 0; i < categories.length; i++) {
    const res = await getCategoryById(categories[i].id)
    categoriesWithProducts.push(res)
  }

  return categoriesWithProducts
}

export async function Category() {
  const categories: ICategory[] = await getCategoriesProducts()

  return (
    <div>
      {categories.map(category => (
        <div key={category.id} className={styles["category-container"]}>
          <h3>{category.name}</h3>
          <ul className={styles["product-container"]}>
            {category.products?.map(product => (
              <Product 
                key={product.id}
                name={product.name}
                description={product.description}
                imageSrc={product.imageSrc}
                price={product.price}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
