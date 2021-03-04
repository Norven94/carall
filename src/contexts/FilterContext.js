import {createContext, useContext} from "react";
import { CarContext } from "../contexts/CarContext"

export const FilterContext = createContext();

const FilterContextProvider = (props) => {
    const { cars, setCars } = useContext(CarContext);
    const { tempCars, setTempCars } = useContext([]);
    setTempCars(cars);
    
    const search = (searchString) => {
        setCars(tempCars);
        setCars(cars.filter((car) => {
            return car.make.toLowerCase().search(searchString.toLowerCase()) !==-1 ||  car.model.toLowerCase().search(searchString.toLowerCase()) !==-1 ||  car.year.toString().toLowerCase().search(searchString.toLowerCase()) !==-1;
        }))
    }
    //   const searchList =(e)=>{    
    //     setNewCars(cars.filter((car)=>{
    //      return car.make.toLowerCase().search(e.target.value.toLowerCase()) !==-1 ;
    //     }) 
    //     )                    
    // }

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