import { MenuForm } from "@/components";
import styles from "./style.module.css"

export default function NewMenu() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Create New Menu</h3>
      <MenuForm />
    </div>
  )
}
