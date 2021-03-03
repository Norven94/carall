import { BrowserRouter, Route } from "react-router-dom";
import CarContextProvider from "./contexts/CarContext";
import ProductPage from "./components/ProductPage";

import Navbar from './components/Navbar'
import Home from './pages/Home'
//import About from './pages/About'
import CartPage from './pages/CartPage'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        {/* CarContextProvider must enclose all components that will have access to its data */}
        <CarContextProvider>
          <Route exact path="/">
          <Navbar />
            <Home />
          </Route>
          
          <Route exact path="/cart">
            <CartPage />
          </Route>
          
          <Route
            path="/product/:productId"
            render={(props) => {
            return <ProductPage productId={props.match.params.productId} />;
            }}
          />
        </CarContextProvider>
        {/*
        <Route exact path="/About" component={About} />
        */}
      </BrowserRouter>
    </div>
  )
}

export default App;
