import SearchFields from "./SearchFields";
import FilterRange from "./FilterRange";
import { Container, Row } from "react-bootstrap";
import Sort from "./Sort";

function SearchGroup() {
  return (
    <div>
      <Container fluid>
        <Row className="d-flex justify-content-center align-content-center flex-wrap">
          <FilterRange />
          <Sort />
          <SearchFields />
        </Row>
      </Container>
    </div>
  );
}

export default SearchGroup;
