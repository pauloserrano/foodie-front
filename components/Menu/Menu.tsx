import Image from 'next/image'
import { Product } from "@/components"
import { IMenu } from '@/types'
import styles from "./Menu.module.css"

async function getMenu() {
  const res = await fetch('http://localhost:4000/menu/now')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export async function Menu() {
  const menu: IMenu = await getMenu()
  
  return (
    <section className={styles["menu-container"]}>
      <h3 className={styles["menu-title"]}>{menu.isDaytime ? "Daytime Menu" : "Nightime Menu"}</h3>
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