import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from './components/Home';
import NavBar from "./components/NavBar";

function App() {
  return (
   <BrowserRouter>
   <div className="App">
     <NavBar />
   <Routes>
     {/* <Route exact path="/" element={<LandingPage/>} /> */}
     <Route exact path="/" element={<Home/>} />
   </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
