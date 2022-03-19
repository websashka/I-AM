import Link from "next/link"
import styles from "./Section.module.css"

const Section = ({ pathname, title }) => {
  return(
    <Link href={{ pathname }}>
      <a className={styles.section}>{title}</a>
    </Link>
 )
}

export default Section;