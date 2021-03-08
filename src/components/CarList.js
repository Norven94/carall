import { useContext } from "react";
import { CarContext } from "../contexts/CarContext";
import Car from "./Car";
import { Container, Row } from "react-bootstrap";
import SearchGroup from "./SearchGroup";

function CarList() {
  const { tempCars} = useContext(CarContext);
  return (
    <div className="carlist-container">
      <SearchGroup />
      
      <Container fluid>
      <h1>Find Your New Favorite Vehicle</h1>
        <Row className="d-flex justify-content-center align-content-center flex-wrap">
          {tempCars.map((car) => (
            <Car key={car.vin} car={car} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default CarList;
