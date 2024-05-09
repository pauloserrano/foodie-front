import { Product } from "@/components"
import { IMenu } from '@/types'
import styles from "./Menu.module.css"
import { getCurrentMenu } from "@/services"

export async function Menu() {
  const menu: IMenu = await getCurrentMenu()
  
  return (
    <section className={styles["menu-container"]}>
      <h3 className={styles["menu-title"]}>Current Menu: {menu.isDaytime ? "Daytime" : "Nightime"}</h3>
      <ul className={styles["product-list"]}>
        {menu.products.map(({ id, name, description, imageSrc, price }) => (
          <Product 
            key={id}
            name={name}
            description={description}
            imageSrc={imageSrc}
            price={price}
          />
        ))}
      </ul>
    </section>
  )
}
