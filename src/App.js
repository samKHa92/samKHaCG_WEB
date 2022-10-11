import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {NavigationBar} from "./components/NavigationBar";
import {Footer} from "./components/Footer";
import {ErrorPageAstronaut} from "./pages/ErrorPageAstronaut";
import {ErrorPageTerminal} from "./pages/ErrorPageTerminal";

function App() {
    const randInt = Math.floor(Math.random() * 10);
  return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
              <Route path="*" element={randInt%2 === 0 ? <ErrorPageAstronaut/> : <ErrorPageTerminal/>}/>
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;
