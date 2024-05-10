import { CategoryForm } from "@/components";
import styles from "./style.module.css"

export default function NewCategory() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Create new Category</h3>
      <CategoryForm />
    </div>
  )
}
