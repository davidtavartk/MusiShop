import { useContext, useEffect, useRef, useState } from "react";
import "./CSS/ShopCategory.scss";
import { ShopContext } from "../Context/ShopContext";
import { RxDropdownMenu } from "react-icons/rx";
import Item from "../components/Item/Item";
import ReactPaginate from "react-paginate";

const ShopCategory = ({ category }) => {
  const { product_data } = useContext(ShopContext);

  const dropdownRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(0);
  const [sortOrder, setSortOrder] = useState("Default");
  const [dropdownSortOpen, setDropdownSortOpen] = useState(false);
  const itemsPerPage = 8;

  const filteredData =
    category === "all"
      ? product_data
      : product_data.filter((item) => item.category === category);

      const sortedData = (() => {
        switch (sortOrder) {
          case "price-asc":
            return [...filteredData].sort((a, b) => a.price - b.price);
          case "price-desc":
            return [...filteredData].sort((a, b) => b.price - a.price);
          default:
            return filteredData;
        }
      })();

  const startIndex = currentPage * itemsPerPage;
  const currentItems = sortedData.slice(startIndex, startIndex + itemsPerPage);
  const pageCount = Math.ceil(sortedData.length / itemsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const handleSortChange = (sortValue) => {
    setSortOrder(sortValue);
    setDropdownSortOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownSortOpen(!dropdownSortOpen);
  };

  const getSortLabel = (sortOrder) => {
    switch (sortOrder) {
      case "price-asc":
        return "Price: Low to High";
      case "price-desc":
        return "Price: High to Low";
      default:
        return "Sort By";
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [category]);

  return (
    <div className="shop-category">
      <div className="shopcategory-indexSort">
        <p>
          <span>
            Showing {startIndex + 1}-
            {Math.min(startIndex + itemsPerPage, filteredData.length)} out of{" "}
            {filteredData.length} total.
          </span>
        </p>
        <div className="shopcategory-sort" onClick={toggleDropdown} ref={dropdownRef}>
          <ul
            style={{ display: dropdownSortOpen ? "block" : "none" }}
          >
            <li onClick={() => handleSortChange("default")}>Default</li>
            <li onClick={() => handleSortChange("price-asc")}>Price: Low to High</li>
            <li onClick={() => handleSortChange("price-desc")}>Price: High to Low</li>
          </ul>
          <span>
            Sort: {getSortLabel(sortOrder)} <RxDropdownMenu />
          </span>
        </div>
      </div>
      <div className="shopcategory-products">
        {currentItems.map((item, index) => {
          if (category === "all" || category === item.category) {
            return <Item key={index} item={item} />;
          }
          return null;
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        containerClassName={"pagination"}
        activeClassName={"active"}
        forcePage={currentPage}
      />
    </div>
  );
};

export default ShopCategory;
