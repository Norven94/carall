import { BrowserRouter, Route } from "react-router-dom";
import CarContextProvider from "./contexts/CarContext";
import CartContextProvider from "./contexts/CartContext";
import FilterContextProvider from "./contexts/FilterContext";
import UserContextProvider from "./contexts/UserContext";
import ProductPage from "./components/ProductPage";

import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import OrderHistory from './pages/OrderHistory'
import CartPage from './pages/CartPage'
import Confirmation from './pages/Confirmation'
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CarContextProvider>
          <FilterContextProvider>
            <CartContextProvider>
              <UserContextProvider>
                <Navbar />
                <Route exact path="/">          
                  <Home />
                </Route>

                <Route exact path="/orderhistory">          
                  <OrderHistory />
                </Route>

                <Route exact path="/login">
                  <LoginPage />
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
              </UserContextProvider>
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
