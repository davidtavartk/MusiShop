import { Link } from "react-router-dom";
import "./SearchDropdown.scss";
import { useEffect, useRef } from "react";

const SearchDropdown = ({ searchQuery, setSearchQuery, products }) => {
  const dropdownRef = useRef();

  const matchingProducts = searchQuery
  ? products
      .filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .slice(0, 5)
  : [];


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSearchQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSearchQuery]);

  

  return (
    <div className="search-dropdown" ref={dropdownRef}>
      {searchQuery && matchingProducts.length === 0 ? (
        <p>No results found</p>
      ) : (
        matchingProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="search-dropdown-item"
            onClick={() => {
                setSearchQuery('');
                window.scrollTo(0, 0);
              }}
          >
            <div className="search-dropdown-item-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="search-dropdown-item-details">
              <p className="search-dropdown-item-name">{product.name}</p>
              <p className="search-dropdown-item-price">${product.price}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default SearchDropdown;