import styles from "./navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a className={styles.main}>Media Pilot</a>
      <ul>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
      </ul>
      <a className={styles.login}>Login / Register</a>
    </nav>
  );
}
