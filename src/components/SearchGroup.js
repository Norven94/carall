import SearchFields from "./SearchFields";
import FilterRange from './FilterRange'
import {Container, Row } from 'react-bootstrap'

function SearchGroup() { 
  return (         
    <div className="search-group-container">
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