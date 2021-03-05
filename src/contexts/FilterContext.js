import {createContext, useContext, useState, useEffect} from "react";
import { CarContext } from "../contexts/CarContext"
export const FilterContext = createContext();

const FilterContextProvider = (props) => {
    const { cars, setCars, tempCars } = useContext(CarContext);
    const [priceStart, setPriceStart] = useState(0)
    const [priceEnd, setPriceEnd] = useState(800000)
    const [milesStart, setMilesStart] = useState(0)
    const [milesEnd, setMilesEnd] = useState(70000)

    //Search function

    const search = (searchString) => {      
        setCars(tempCars.filter((car) => {              
            return car.make.toLowerCase().search(searchString.toLowerCase()) !==-1 
            ||  car.model.toLowerCase().search(searchString.toLowerCase()) !==-1
            ||  car.year.toString().toLowerCase().search(searchString.toLowerCase()) !==-1;
        }))              
    }

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

    useEffect(() => {
        setCars(tempCars.filter((car) => {
            return car.price < priceEnd && car.price > priceStart
        }))
    }, [priceStart, priceEnd])


    useEffect(() => {
        setCars(tempCars.filter((car) => {
            return car.miles < milesEnd && car.miles > milesStart
        }))
    }, [milesStart, milesEnd])

    //Sort functions

    const sort = (sortChoice) => {
        let sorted;

        if (sortChoice === "make") {
            sorted = [...cars].sort((a,b) => (a.make > b.make ? 1 : -1))
        } else if (sortChoice === "model") {
            sorted = [...cars].sort((a,b) => (a.model > b.model ? 1 : -1))
        } else if (sortChoice === "year up") {
            sorted = [...cars].sort((a,b) => (a.year > b.year ? 1 : -1))
        } else {
            sorted = [...cars].sort((a,b) => (a.year < b.year ? 1 : -1))
        }

        setCars(sorted)

        
        
        

        /*
        if (sortChoice === "") return cars.sort((a, b) => (a.model > b.model ? 1 : -1));
        return cars.sort((a, b) => (a[sortChoice] > b[sortChoice] ? 1 : -1));
        */
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