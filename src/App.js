import { BrowserRouter, Route } from "react-router-dom";

import ContextProvider from './contexts/CarContext'
import Navbar from './components/Navbar'
import Home from './'

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
        </ContextProvider>

      </BrowserRouter>
    </div>
  )
}

export default App;
