import {createContext, useContext} from "react";
import { CarContext } from "../contexts/CarContext"

export const FilterContext = createContext();

const FilterContextProvider = (props) => {
    const { cars, setCars } = useContext(CarContext)

    console.log(cars)

    const values =
    {
    }

    return(
        <FilterContext.Provider value={values}>
        {props.children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider