import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import LoginSignup from "./pages/LoginSignup";
import Product from "./pages/Product";
import ShopCategory from "./pages/ShopCategory";
import routePaths from "./routes/routePaths";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
      <ToastContainer autoClose={10400} hideProgressBar={true} theme="dark"/>
        <Navbar />
        <Routes>
          <Route path={routePaths.Home} element={<Home />} />
          <Route path={routePaths.Product} element={<Product />} />
          <Route path={routePaths.All} element={<ShopCategory category="all" />} />
          <Route path={routePaths.Guitars} element={<ShopCategory category="guitar" />} />
          <Route path={routePaths.Bass} element={<ShopCategory category="bass" />} />
          <Route path={routePaths.Speakers} element={<ShopCategory category="speaker" />} />
          <Route path={routePaths.Accessories} element={<ShopCategory category="accessories" />}/>
          <Route path={routePaths.Contact} element={<Contact/>}/>
          <Route path="/product/:productId" element={<Product />} />
          <Route path={routePaths.Cart} element={<Cart />} />
          <Route path={routePaths.LoginSingup} element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;