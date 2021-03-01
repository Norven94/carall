import { BrowserRouter, Route } from "react-router-dom";
import CarContextProvider from "./contexts/CarContext";
import ProductPage from "./components/ProductPage";

import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from '.pages/About'
import CartPage from './pages/CartPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* ContextProvider must enclose all components that will have access to its data */}
        <CarContextProvider>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
            <CartPage />
          </Route>
        <Route
          path="/products/:productId"
          render={(props) => {
          return <ProductPage productId={props.match.params.productId} />;
          }}
        />
        </CarContextProvider>
        <Route exact path="/About" component={About} />
      </BrowserRouter>
    </div>
  )
}

export default App;
