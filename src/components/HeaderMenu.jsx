import styles from "./HeaderMenu.module.scss";

function HeaderMenu() {
  return (
    <ul className={`${styles.MenuContainer} card p-20`}>
      <li>Wishlist</li>
      <li>GeoMix</li>
      <li>Connexion</li>
    </ul>
  );
}

export default HeaderMenu;
