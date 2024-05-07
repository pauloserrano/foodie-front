import Link from 'next/link'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <h1>Header</h1>
      
      <ul className={styles["nav-container"]}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/product">Products</Link>
        </li>
        <li>
          <Link href="/category/new">Create Category</Link>
        </li>
        <li>
          <Link href="/product/new">Create Product</Link>
        </li>
        <li>
          <Link href="/menu/new">Create Menu</Link>
        </li>
      </ul>
      
    </header>
  )
}
