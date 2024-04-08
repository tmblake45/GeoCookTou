import styles from "./Content.module.scss";
import Recipe from "./Recipe";
import { data } from "../data/Recipes";
function Content() {
  const Recipes = data;
  return (
    <div className="flex-fill container p-20 ">
      <h1 className="my-30">Les recettes à la une</h1>
      <div className={`card p-20 ${styles.ContentontentCard}`}>
        <div className={styles.grid}>
          {Recipes.map((r, index) => (
            <Recipe title={r.title} image={r.image} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Content;
