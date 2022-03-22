import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import ProtectedRoute from "./auth/Protected-route";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import UserForm from "./components/UserForm";
import Detail from './components/Detail';
import Footer from './components/Footer';
import ShoppingCart from "./components/ShoppingCart";
import Wishlist from "./components/Wishlist";
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
            <Route path ="/landing" element={<LandingPage />} />
            <Route path="/register" element={<ProtectedRoute component={UserForm} />} />
            <Route exact path="/:id" element={<Detail />} />
            <Route path="shoppingcart" element={<ShoppingCart />} />
            <Route path="/favourites" element={<ProtectedRoute component={Wishlist} />} />
            <Route path="/checkout" element={<Checkout/>} />
          </Routes>
          <Footer />
        </Auth0ProviderWithHistory>
      </div>
    </BrowserRouter>
  );
}

export default App;
