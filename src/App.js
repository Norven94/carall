import { BrowserRouter, Route } from "react-router-dom";
import CarContextProvider from "./contexts/CarContext";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CarContextProvider>
        <Route
          path="/products/:productId"
          render={(props) => {
          return <ProductPage productId={props.match.params.productId} />;
          }}
        />
        </CarContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
