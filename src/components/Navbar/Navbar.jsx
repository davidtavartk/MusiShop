import "./Navbar.scss";
import logo from "../../assets/logo-black.png";
import logoSmall from "../../assets/logo-black-half.png";
import search_icon from "../../assets/search-w.png";
import { CgChevronDown } from "react-icons/cg";
import { BsCart3 } from "react-icons/bs";
import { CiMenuFries } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import routePaths from "../../routes/routePaths";
import { CartContext } from "../../Context/CartContext";
import useWindowDimensions from "../../hooks/windowsDimensions";
import SearchDropdown from "../SearchDropdown/SearchDropdown";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [logoImage, setLogoImage] = useState(logo);
  const [displayLogin, setDisplayLogin] = useState(true);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [logoStyle, setLogoStyle] = useState({});

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width >= 1024) {
      setIsDropdownOpen(false);
    }
  }, [width]);

  useEffect(() => {
    if (width <= 768) {
      setLogoImage(logoSmall);
      setDisplayLogin(false);
    } else {
      setLogoImage(logo);
      setDisplayLogin(true);
    }

    if (width <= 380) {
      setLogoStyle({ left: "3px" });
    } else {
      setLogoStyle({});
    }
  }, [width]);

  const clearMenu = () => {
    setMenu("");
  };

  const { cartItems } = useContext(CartContext);
  const { product_data } = useContext(ShopContext);

  const totalQuantity = Object.values(cartItems).reduce((a, b) => a + b, 0);

  const handleMobileMenu = () => {
    setMobileDropdownOpen((prev) => !prev);
  };

  return (
    <div className="navbar">
      <a href="/" className="image-wrapper">
        <img
          src={logoImage}
          alt="Logo"
          className={`logo ${logoImage === logoSmall ? "small-logo" : ""}`}
          style={{ ...logoStyle }}
        />
      </a>

      <ul className="nav-menu">
        <li>
          <Link to={routePaths.Home} className="menu-a" onClick={clearMenu}>
            Home
          </Link>
        </li>
        <li>
          <a href="#" className="menu-a">
            Products <CgChevronDown />
          </a>
          <ul className="dropdown">
            <Link
              to={routePaths.All}
              onClick={() => {
                setMenu("all");
              }}
              className={menu === "all" ? "left-border" : ""}
            >
              <li>All</li>
            </Link>
            <Link
              to={routePaths.Guitars}
              onClick={() => {
                setMenu("guitar");
              }}
              className={menu === "guitar" ? "left-border" : ""}
            >
              <li>Guitars</li>
            </Link>
            <Link
              to={routePaths.Bass}
              onClick={() => {
                setMenu("bass");
              }}
              className={menu === "bass" ? "left-border" : ""}
            >
              <li>Bass</li>
            </Link>
            <Link
              to={routePaths.Speakers}
              onClick={() => {
                setMenu("speakers");
              }}
              className={menu === "speakers" ? "left-border" : ""}
            >
              <li>Speakers</li>
            </Link>
            <Link
              to={routePaths.Accessories}
              onClick={() => {
                setMenu("accessories");
              }}
              className={menu === "accessories" ? "left-border" : ""}
            >
              <li>Accessories</li>
            </Link>
          </ul>
        </li>
        <li className="menu-a" onClick={clearMenu}>
          <a href="#" className="menu-a">
            About
          </a>
        </li>
      </ul>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <img src={search_icon} alt="search-icon" className="search-img" />
        <SearchDropdown
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          products={product_data}
        />
      </div>

      <div className="nav-props">
        {displayLogin && (
          <Link to={routePaths.LoginSingup} onClick={clearMenu}>
            <button>Login</button>
          </Link>
        )}

        <Link to={routePaths.Cart} onClick={clearMenu}>
          <BsCart3 className="cart-icon" />
        </Link>
        <div className="nav-cart-count">{totalQuantity}</div>
      </div>

      <div
        className="hamburger-menu"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <CiMenuFries />
      </div>

      <div
        className={`mobile-menu ${isDropdownOpen ? "mobile-menu-open" : ""}`}
      >
        <div className="mobile-menu-item">
          <a href="/">Home</a>
        </div>
        <div
          className="mobile-menu-item products-mobile"
          onClick={handleMobileMenu}
        >
          <a href="#">Products</a> <CgChevronDown />
        </div>
        {mobileDropdownOpen && (
          <div className="mobile-menu-product-items">
            <ul className="mobile-menu-dropdown">
              <Link
                to={routePaths.All}
                onClick={() => {
                  setMenu("all");
                  setIsDropdownOpen(false);
                  setMobileDropdownOpen(false);
                }}
                className={menu === "all" ? "left-border" : ""}
              >
                <li>All</li>
              </Link>

              <Link
                to={routePaths.Guitars}
                onClick={() => {
                  setMenu("guitar");
                  setIsDropdownOpen(false);
                  setMobileDropdownOpen(false);
                }}
                className={menu === "guitar" ? "left-border" : ""}
              >
                <li>Guitars</li>
              </Link>
              <Link
                to={routePaths.Bass}
                onClick={() => {
                  setMenu("bass");
                  setIsDropdownOpen(false);
                  setMobileDropdownOpen(false);
                }}
                className={menu === "bass" ? "left-border" : ""}
              >
                <li>Bass</li>
              </Link>
              <Link
                to={routePaths.Speakers}
                onClick={() => {
                  setMenu("speakers");
                  setIsDropdownOpen(false);
                  setMobileDropdownOpen(false);
                }}
                className={menu === "speakers" ? "left-border" : ""}
              >
                <li>Speakers</li>
              </Link>
              <Link
                to={routePaths.Accessories}
                onClick={() => {
                  setMenu("accessories");
                  setIsDropdownOpen(false);
                  setMobileDropdownOpen(false);
                }}
                className={menu === "accessories" ? "left-border" : ""}
              >
                <li>Accessories</li>
              </Link>
            </ul>
          </div>
        )}
        <div className="mobile-menu-item">
          <a href="">About</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
