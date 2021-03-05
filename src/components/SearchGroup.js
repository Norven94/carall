import SearchFields from "./SearchFields";
import FilterRange from './FilterRange'
import {Container, Row } from 'react-bootstrap'
import styles from '../css/SearchGroup.module.css'
function SearchGroup() { 
  return (         
    <div className={styles.container}>
      <Container fluid>
        <Row className="d-flex justify-content-center align-content-center flex-wrap">
          <FilterRange />
          <SearchFields />
        </Row>
      </Container>
    </div>
  )
}

export default SearchGroup