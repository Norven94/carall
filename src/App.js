import { BrowserRouter, Route } from "react-router-dom";

import ContextProvider from './contexts/CarContext'
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
        <ContextProvider>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
            <CartPage />
          </Route>
        </ContextProvider>
        <Route exact path="/About" component={About} />
      </BrowserRouter>
    </div>
  )
}

export default App;
