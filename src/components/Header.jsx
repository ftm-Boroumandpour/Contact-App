import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.container}>
        <h1>Contact App</h1>
        <p>
            <a href="https://botostadt.ir">Botostart</a> | React course
        </p>
    </div>
  )
}

export default Header