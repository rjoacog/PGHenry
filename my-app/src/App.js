import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import UserForm from "./components/UserForm";
import Detail from './components/Detail';
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Auth0ProviderWithHistory>
          <NavBar />
          <Routes>
            {/* <Route exact path="/" element={<LandingPage/>} /> */}
            <Route exact path="/" element={<Home />} />
            <Route path ="/landing" element={<LandingPage />} />
            <Route path="/register" element={<UserForm />} />
            <Route exact path="/:id" element={<Detail />} />

          </Routes>
          <Footer />
        </Auth0ProviderWithHistory>
      </div>
    </BrowserRouter>
  );
}

export default App;
