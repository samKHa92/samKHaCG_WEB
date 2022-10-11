import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {NavigationBar} from "./components/NavigationBar";
import {Footer} from "./components/Footer";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;
