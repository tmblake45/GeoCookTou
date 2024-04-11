import styles from "./Header.module.scss";
import Duck1 from "../assets/images/Duck1.jpg";
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill d-flex">
        <img src={Duck1} alt="logo geocooktou" />
        <span className="d-flex align-items-center">GeoCookTou</span>
      </div>
      <div className={`${styles.searchBox} d-flex align-items-center`}>
    <input
    type="text"
      placeholder="Je recherche une recette..."
         className={styles.searchInput}
      /></div>
      <ul className={styles.headerList}>
        <button className="mr-5 btn btn-reverse-primary">
          <i className="fa-solid fa-heart mr-5"></i>
          <span>Wishlist</span>
        </button>
        <button className="mr-5 btn btn-primary">
          <i className="fa fa-flask mr-5"></i>
          <span>Geomix</span>
        </button>
        <button className="btn btn-primary">
          <i className="fa-solid fa-user"></i>
          Connexion
        </button>
      </ul>
      <i
        onClick={() => setShowMenu(true)}
        className={`fa-solid fa-bars ${styles.headerXs}`}></i>
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>
          <HeaderMenu />
        </>
      )}
    </header>
  );
}

export default Header;

// function Header() {
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <header className={`${styles.header} d-flex flex-row align-items-center`}>
//       <div className={`${styles.logoSection} d-flex align-items-center`}>
//         <i className={`${styles.icon} fa-solid fa-bars `}></i>
//         <img src={Duck1} alt="Logo" className={styles.logo} />
//         <span>GeoCookTou</span>
//       </div>
//       <div className={`${styles.searchBox} d-flex align-items-center`}>
//         <input
//           type="text"
//           placeholder="Je recherche une recette..."
//           className={styles.searchInput}
//         />
//         <button className={styles.searchButton}>
//           <i className="fa fa-search"></i>
//         </button>
//       </div>
//       <nav className={`{diplay:"flex"} ${styles.navigation}`}>
//         <ul className={` ${styles.headerList} d-flex`}>
//           <li>
//             <button className="btn btn-primary mr-5">
//               <i className="fa-solid fa-flask"></i>
//               <span>GeoMix</span>
//             </button>
//           </li>
//           <li>
//             <button className="btn btn-primary mr-5">
//               <i className="fa-solid fa-heart"></i>
//               <span>Wishlist</span>
//             </button>
//           </li>
//           <li>
//             <button className="btn btn-primary">
//               <i className="fa-solid fa-user"></i>
//               <span>Connexion</span>
//             </button>
//           </li>
//         </ul>
//       </nav>
//       <i
//         onClick={() => setShowMenu(true)}
//         className={`fa-solid fa-bars ${styles.headerXs}`}></i>
//       {showMenu && (
//         <>
//           <div onClick={() => setShowMenu(false)} className="calc"></div>
//           <HeaderMenu />
//         </>
//       )}
//     </header>
//   );
// }

// export default Header;
