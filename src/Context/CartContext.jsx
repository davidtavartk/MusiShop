
import { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext({
  addToCart: (item) => {},
  removeFromCart: (id) => {},
  clearCart: () => {}
});

const initialCartState = JSON.parse(localStorage.getItem('cart')) || {};

const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ITEM': {
        const itemId = action.item.id;
        const updatedState = {
          ...state,
          [itemId]: (state[itemId] || 0) + 1,
        };
        return updatedState;
      }
      case 'REMOVE_ITEM': {
        const { [action.itemId]: _, ...rest } = state;
        return rest;
      }
      case 'CLEAR_CART': {
        return {};
      }
      default:
        return state;
    }
  };
  

const CartContextProvider = ({ children }) => {
  const [cartItems, dispatchCartAction] = useReducer(cartReducer, initialCartState);

  const addToCart = (item) => {
    dispatchCartAction({ type: 'ADD_ITEM', item });
  };

  const removeFromCart = (itemId) => {
    dispatchCartAction({ type: 'REMOVE_ITEM', itemId });
  };

  const clearCart = () => {
    dispatchCartAction({ type: 'CLEAR_CART' });
  };

  useEffect(() => {
    if (cartItems && Object.keys(cartItems).length > 0) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    } else {
      localStorage.removeItem('cart');
    }
  }, [cartItems]);

  const cartContextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };


  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;