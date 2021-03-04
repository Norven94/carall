import { useState } from 'react'
import styles from '../css/filter.module.css'

const Filter = () => {
  const [value, setValue] = useState([10,50])

  return (
      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>Filter</button>
        <div className={styles.dropdownContent}>
          <form action="">
            <label for="miles">Miles</label>
            <input type="range" name="miles" id="miles" min="0" max="100" />
            <label for="price">Price</label>
            <input type="range" name="price" min="0" max="100"/>
            
          </form>
        </div>
      </div>
  );
}

export default Filter;