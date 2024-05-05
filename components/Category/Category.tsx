import { Product } from "@/components"
import { ICategory } from "@/types"
import styles from "./Category.module.css"

async function getCategoryById(id: string) {
  const res = await fetch(`http://localhost:4000/category/${id}`)
  const category: ICategory = await res.json()
  
  return category
}

async function getCategories() {
  const res = await fetch('http://localhost:4000/category')
  const categories: ICategory[] = await res.json()

  const categoriesWithProducts: ICategory[] = []
  for(let i = 0; i < categories.length; i++) {
    const res = await getCategoryById(categories[i].id)
    categoriesWithProducts.push(res)
  }

  return categoriesWithProducts
}

export async function Category() {
  const categories: ICategory[] = await getCategories()
  
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
