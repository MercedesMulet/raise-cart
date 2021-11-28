import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addedItem = (item) => {
    if (!cart.includes(item)) {
      return setCart([...cart, item]);
    } else {
      return false;
    }
  };

  const removeItem = (id) => {
    const remove = cart.filter((i) => i.referencia !== id);
    setCart(remove);
  };

  const emptyCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addedItem,
        removeItem,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
