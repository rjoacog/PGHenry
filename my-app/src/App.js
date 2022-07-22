import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import ProtectedRoute from "./auth/Protected-route";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Detail from './components/Detail';
import Footer from './components/Footer';
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Auth0ProviderWithHistory>
          <NavBar />
          <Routes>
            {/* <Route exact path="/" element={<LandingPage/>} /> */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/:id" element={<Detail />} />
            <Route path="shoppingcart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<ProtectedRoute component={Checkout} />} />
          </Routes>
          <Footer />
        </Auth0ProviderWithHistory>
      </div>
    </BrowserRouter>
  );
}

export default App;
