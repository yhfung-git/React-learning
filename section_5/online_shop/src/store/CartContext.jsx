import { createContext, useReducer } from "react";

import cartReducer from "../reducers/CartReducer";

export const CartContext = createContext({
  items: [],
  onAddToCart: () => {},
  onUpdateCartItemQuantity: () => {},
});

const CartContextProvider = ({ children }) => {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(cartReducer, {
    items: [],
  });

  const handleAddItemToCart = (id) => {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: { id },
    });
  };

  const handleUpdateCartItemQuantity = (productId, amount) => {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: { productId, amount },
    });
  };

  const ctxValue = {
    items: shoppingCartState.items,
    onAddToCart: handleAddItemToCart,
    onUpdateCartItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
