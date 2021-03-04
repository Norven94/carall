import {createContext, useContext, useState, useEffect} from "react";
import { CarContext } from "../contexts/CarContext"

export const FilterContext = createContext();

const FilterContextProvider = (props) => {
    const { cars, setCars, tempCars } = useContext(CarContext);

    const search = (searchString) => {   
        
        /*
        setCars(cars.map((car) => {
            if (!searchString) {
                return car
            } else if (car.make.toLowerCase().search(searchString.toLowerCase()) !==-1) {
                return car
            }
        }))
        */

        
        /*
        if (!searchString) {
            setCars(tempCars)
        } else {
            setCars(cars.filter((car) => {
                return car.make.toLowerCase().search(searchString.toLowerCase()) !==-1 ||  car.model.toLowerCase().search(searchString.toLowerCase()) !==-1 ||  car.year.toString().toLowerCase().search(searchString.toLowerCase()) !==-1;
            }))
        } 
        */
    }

    const values =
    {
        search
    }

    return(
        <FilterContext.Provider value={values}>
        {props.children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider