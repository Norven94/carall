import {createContext, useContext, useState, useEffect} from "react";
import { CarContext } from "../contexts/CarContext"
export const FilterContext = createContext();

const FilterContextProvider = (props) => {
    const { cars, setCars, tempCars, setTempCars } = useContext(CarContext);
    const [priceStart, setPriceStart] = useState(0)
    const [priceEnd, setPriceEnd] = useState(800000)
    const [milesStart, setMilesStart] = useState(0)
    const [milesEnd, setMilesEnd] = useState(70000)
    const [searchString, setSearchString] = useState("")
    //Search function

    
    //Filter range functions
    
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

    const search = (searchString) => {  
        setSearchString(searchString)    
    }
    
    useEffect(() => {
        setTempCars(cars.filter((car) => {
            return car.price < priceEnd && car.price > priceStart && car.miles < milesEnd && car.miles > milesStart
            && (car.make.toLowerCase().includes(searchString.toLowerCase())
            ||  car.model.toLowerCase().includes(searchString.toLowerCase())
            ||  car.year.toString().toLowerCase().includes(searchString.toLowerCase()) )

        }))
    }, [priceStart, priceEnd,milesStart, milesEnd, searchString])
   
    //Sort functions

    const sort = (sortChoice) => {
        let sorted;
        
        if (sortChoice === "make") {
            sorted = [...tempCars].sort((a,b) => (a.make > b.make ? 1 : -1))
        } else if (sortChoice === "model") {
            sorted = [...tempCars].sort((a,b) => (a.model > b.model ? 1 : -1))
        } else if (sortChoice === "year up") {
            sorted = [...tempCars].sort((a,b) => (a.year > b.year ? 1 : -1))
        } else {
            sorted = [...tempCars].sort((a,b) => (a.year < b.year ? 1 : -1))
        }

        setTempCars(sorted)
     
    }

    const values =
    {
        search, 
        filterPriceEnd,
        filterPriceStart,
        filterMilesEnd,
        filterMilesStart,
        sort
    }
    
    return(
        <FilterContext.Provider value={values}>
        {props.children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider