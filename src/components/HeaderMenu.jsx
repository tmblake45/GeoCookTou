import styles from "./HeaderMenu.module.scss";

function HeaderMenu() {
  return (
    <ul className={`${styles.MenuContainer} card p-20`}>
      <li>Wishlist</li>
      <li>Connexion</li>
      <li>GeoMix</li>
    </ul>
  );
}

export default HeaderMenu;
