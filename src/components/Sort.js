import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";
import styles from '../css/Sort.module.css'

function Sort() {
  const { sort } = useContext(FilterContext);

  const handleChange = (e) => {
    sort(e.target.value);
  };

  return (
    <div className="sort-container">
      <select className="form-select" className={styles.select} onChange={handleChange} aria-label="Default select example">
        <option defaultValue className={styles.sortSelect}>Sort by</option>
        <option className={styles.sortSelect} bg="danger" value="make">Brand</option>
        <option className={styles.sortSelect} value="model">Model a-z</option>
        <option className={styles.sortSelect} value="year up">Year ascending</option>
        <option className={styles.sortSelect} value="year down">Year descending</option>
      </select>
    </div>
  );
}

export default Sort;
