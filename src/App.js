import { BrowserRouter, Route } from "react-router-dom";
import CarContextProvider from "./contexts/CarContext";
import CartContextProvider from "./contexts/CartContext";
import ProductPage from "./components/ProductPage";

import Navbar from './components/Navbar'
import Home from './pages/Home'
//import About from './pages/About'
import CartPage from './pages/CartPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        {/* CarContextProvider must enclose all components that will have access to its data */}
        <CarContextProvider>
          <CartContextProvider>
            <Navbar />
            <Route exact path="/">          
              <Home />
            </Route>
            
            <Route exact path="/cartpage">
              <CartPage />
            </Route>
            
            <Route
              path="/product/:productId"
              render={(props) => {
              return <ProductPage productId={props.match.params.productId} />;
              }}
            />
          </CartContextProvider>
        </CarContextProvider>
        {/*
        <Route exact path="/About" component={About} />
        */}
      </BrowserRouter>
    </div>
  )
}

export default App;
