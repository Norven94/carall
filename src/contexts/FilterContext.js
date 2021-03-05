import {createContext, useContext, useState, useEffect} from "react";
import { CarContext } from "../contexts/CarContext"
export const FilterContext = createContext();

const FilterContextProvider = (props) => {
    const { cars, setCars, tempCars } = useContext(CarContext);
    const [priceStart, setPriceStart] = useState(0)
    const [priceEnd, setPriceEnd] = useState(0)
    const [milesStart, setMilesStart] = useState(0)
    const [milesEnd, setMilesEnd] = useState(0)

    const search = (searchString) => {      
        setCars(tempCars.filter((car) => {
            console.log(searchString)              
            return car.make.toLowerCase().search(searchString.toLowerCase()) !==-1 
            ||  car.model.toLowerCase().search(searchString.toLowerCase()) !==-1
            ||  car.year.toString().toLowerCase().search(searchString.toLowerCase()) !==-1;
        }))              
    }

    const filterPriceStart = (price) => {
        setPriceStart(price)
    }

    const filterPriceEnd = (price) => {
        setPriceEnd(price)
    }

    const filterMilesStart = (miles) => {
        setMilesStart(miles)
    }

    const filterMilesEnd = (miles) => {
        setMilesEnd(miles)
    }

    useEffect(() => {
        setCars(tempCars.filter((car) => {
            return car.price < priceEnd && car.price > priceStart
        }))
    }, [priceStart, priceEnd])

    const values =
    {
        search, 
        filterPriceEnd,
        filterPriceStart,
        filterMilesEnd,
        filterMilesStart
    }
    
    return(
        <FilterContext.Provider value={values}>
        {props.children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider