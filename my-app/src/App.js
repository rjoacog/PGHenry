import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from './components/Home';
import Detail from "./components/Detail";

function App() {
  return (
   <BrowserRouter>
   <div className="App">
   <Routes>
     {/* <Route exact path="/" element={<LandingPage/>} /> */}
     <Route exact path="/" element={<Home/>} />
     <Route exact path="/products/:id" element={<Detail/>}/>
   </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
