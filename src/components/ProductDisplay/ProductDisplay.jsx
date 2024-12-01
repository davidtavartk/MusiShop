import { useContext } from "react";
import "./ProductDisplay.scss";
import { CartContext } from "../../Context/CartContext";
import { toast } from 'react-toastify';

const ProductDisplay = ({ product }) => {
  const cartItems = useContext(CartContext);

  const notify = () => toast(`${product.name} added to cart!`);

  const handleAddToCart = () => {
    cartItems.addToCart(product);
    notify();
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="overlay"></div>
        <img
          src={product.image}
          alt={`${
            product.category.charAt(0).toUpperCase() + product.category.slice(1)
          } Image`}
        />
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-description">
          {product.description}
        </div>
        <div className="productdisplay-bottom">
          <div className="productdisplay-right-price">
            <span>${product.price}</span>
          </div>
          <button onClick={handleAddToCart}>ADD TO CART</button>
          <p className="productdisplay-right-category">
            Category:{" "}
            <span>
              {product.category.charAt(0).toUpperCase() +
                product.category.slice(1)}
            </span>
          </p>
        </div>
      </div>
      {/* <div><ToastContainer /></div> */}
    </div>
  );
};

export default ProductDisplay;
