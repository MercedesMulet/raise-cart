import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (quantity >= 1 || quantity === -1) {
      const product = {
        name: item.name,
        price: item.price,
        quantity: quantity,
        id: item.id,
        commercialName: item.commercialName,
        img: item.img,
        description: item.description,
        stock: item.stock,
      };

      const isInCart = cart.findIndex((product) => product.name === item.name);
      // Se checkea si esta repetido o no
      if (isInCart >= 0) {
        // cart[isInCart] = { ...cart[isInCart], quantity: cart[isInCart].quantity + quantity };
        setCart(
          cart.map((item, index) =>
            isInCart === index
              ? { ...item, quantity: item.quantity + quantity }
              : null
          )
        );
      } else {
        setCart((curr) => [...curr, product]);
      }
    } else {
      console.log('No hay stock');
    }
  };

  const removeItem = (item) => {
    // Checkea si existe el producto
    const isInCart = cart.findIndex((product) => product.name === item.name);
    // Copia el array del carrito
    const cartCopy = Array.from(cart);
    if (isInCart >= 0) {
      // Se borra el item del carrito
      cartCopy.splice(isInCart, 1);
      // Se retorna el carrito actualizado
      setCart(cartCopy);
    }
  };

  const clearCart = () => {
    // Se retorna el carrito vacio
    setCart([]);
  };

  console.log(cart);

  return (
    <CartContext.Provider
      value={{ cart, setCart, addItem, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
