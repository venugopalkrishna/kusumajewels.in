import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Logo */}
        <div className={styles.logo}>
          <img src="/logo.png" alt="Swastik Gold" />
          <span>KK GOLD</span>
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          <a href="/">Home</a>
          <a href="/about">About us</a>
          <a href="/products">Products</a>
          <a href="/founders">Founders</a>
          <a href="/contact">Contact us</a>
          <a href="/privacy">Privacy Policy</a>
        </nav>
      </div>
    </header>
  );
};
export default Header;
