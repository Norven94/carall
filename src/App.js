import { BrowserRouter, Route } from "react-router-dom";
import CarContextProvider from "./contexts/CarContext";
import CartContextProvider from "./contexts/CartContext";
import FilterContextProvider from "./contexts/FilterContext";
import ProductPage from "./components/ProductPage";

import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import CartPage from './pages/CartPage'
import Confirmation from './pages/Confirmation'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CarContextProvider>
          <FilterContextProvider>
            <CartContextProvider>
              <Navbar />
              <Route exact path="/">          
                <Home />
              </Route>
              
              <Route exact path="/cartpage">
                <CartPage />
              </Route>

              <Route exact path="/confirmation">
                <Confirmation />
              </Route>
              
              <Route
                path="/product/:productId"
                render={(props) => {
                return <ProductPage productId={props.match.params.productId} />;
                }}
              />
            </CartContextProvider>
          </FilterContextProvider>
        </CarContextProvider>
        {
        <Route exact path="/About" component={About} />
        }
      </BrowserRouter>
    </div>
  )
}

export default App;
