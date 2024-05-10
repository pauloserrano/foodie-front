import Image from 'next/image'
import { IProduct } from '@/types'
import styles from "./Product.module.css"

type ProductProps = Pick<IProduct, "name" | "description" | "price" | "imageSrc">

export function Product({ name, price, imageSrc, description }: ProductProps) {
  return (
    <li className={styles["product-container"]}>
      <div>{name}</div>
      <div>{description}</div>
      <div>R$ {price}</div>
      <Image
        alt={name}
        src={imageSrc}
        className={styles["menu-image"]}
        width={300}
        height={200}
      />
    </li>
  )
}
