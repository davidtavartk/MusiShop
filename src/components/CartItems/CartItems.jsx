import { useContext, useEffect, useState } from "react";
import "./CartItems.scss";
import { CartContext } from "../../Context/CartContext";
import { ShopContext } from "../../Context/ShopContext";
import { IoMdRemoveCircleOutline } from "react-icons/io";

const CartItems = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const { product_data } = useContext(ShopContext);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  console.log("Cart Items as Object:", cartItems);

  useEffect(() => {
    const calculateTotals = () => {
      let sub = 0;
      product_data.forEach((product) => {
        if (cartItems[product.id] > 0) {
          sub += product.price * cartItems[product.id];
        }
      });
      setSubtotal(sub);
      setTotal(sub);
    };

    calculateTotals();
  }, [cartItems, product_data]);

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className="cartitems">
      {Object.keys(cartItems).length > 0 ? (
        <>
      <table className="cartitems-table">
        <thead>
          <tr>
            <th>Products</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {product_data.map((product) => {
            if (cartItems[product.id] > 0) {
              return (
                <tr key={product.id}>
                  <td>
                    <img
                      src={product.image}
                      alt=""
                      className="carticon-product-icon"
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>
                    <button className="cartitems-quantity">
                      {cartItems[product.id]}
                    </button>
                  </td>
                  <td>${(product.price * cartItems[product.id]).toFixed(2)}</td>
                  <td>
                    <IoMdRemoveCircleOutline
                      className="cartitems-remove-icon"
                      onClick={() => handleRemoveFromCart(product.id)}
                      alt="Remove Icon"
                    />
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${total.toFixed(2)}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div></>) : (
        <div className="empty"><h1>No items in the cart... <br /> <br /> Please add items to proceed to checkout</h1></div>
      )}
    </div>
  );
};

export default CartItems;
