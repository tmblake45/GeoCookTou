import styles from "./Header.module.scss";
import Duck1 from "../assets/images/Duck1.jpg";
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className={`${styles.logoSection} d-flex align-items-center`}>
        <i className={`${styles.icon} fa-solid fa-bars `}></i>
        <img src={Duck1} alt="Logo" className={styles.logo} />
        <span>GeoCookTou</span>
      </div>
      <div className={`${styles.searchBox} d-flex align-items-center`}>
        <input
          type="text"
          placeholder="Je recherche une recette..."
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>
          <i className="fa fa-search"></i>
        </button>
      </div>
      <nav className={`{diplay:"flex"} ${styles.navigation}`}>
        <ul className={styles.headerList}>
          <li>
            <button className="btn btn-primary">
              <i className="fa-solid fa-flask mr-5"></i>
              <span>GeoMix</span>
            </button>
          </li>
          <li>
            <button className="btn btn-primary">
              <i className="fa-solid fa-heart"></i>
              <span>Wishlist</span>
            </button>
          </li>
          <li>
            <button className="btn btn-primary">
              <i className="fa-solid fa-user"></i>
              <span>Connexion</span>
            </button>
          </li>
        </ul>
      </nav>
      {/* <i
        onClick={() => setShowMenu(true)}
        className={`fa-solid fa-bars ${styles.headerXs}`}></i>
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>
          <HeaderMenu />
        </>
      )} */}
    </header>
  );
}

export default Header;