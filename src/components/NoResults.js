import styles from '../css/NoResults.module.css'

const NoResults = () => {
  return (
    <div className={styles.NoResults}>
      <img className={styles.searchIcon} src="assets/icons/searchcar.svg" alt="No Results"/>
      <h2 className={styles.tryMessage}>No Results Found</h2>
      <p>Try your search again</p>
    </div>
  );
}

export default NoResults;