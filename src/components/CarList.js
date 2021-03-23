import { useContext, useEffect, useState } from "react";
import { CarContext } from "../contexts/CarContext";
import Car from "./Car";
import { Container, Row } from "react-bootstrap";
import SearchGroup from "./SearchGroup";
import Pagination from "./Pagination";
import NoResults from './NoResults'

function CarList() {
  const { tempCars } = useContext(CarContext);

  const [currentPage, setCurrentPage] = useState(1)
  const [carsPerPage] = useState(10)

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = tempCars.slice(indexOfFirstCar, indexOfLastCar)
  const totalPagesNum = Math.ceil(tempCars.length / carsPerPage)

  return (
    <div className="carlist-container">
      <h1>Find Your New Favorite Vehicle</h1>
      <SearchGroup />

      <Container fluid>
        <Row className="d-flex justify-content-center align-content-center flex-wrap">
          {currentCars.length === 0 ? <NoResults /> : currentCars.map((car) => (
            <Car key={car.vin} car={car} />
          ))}
        </Row>
      </Container>
      <Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage} tempCars={tempCars} currentCars={currentCars} />
    </div>
  );
}

export default CarList;