import { useContext } from 'react';
import { UseCart } from '../../contexts/cart/CartContext';
import { CartProvider } from '../../contexts/cart/CartContext';

export const CartContainer = () => {
  const { cart } = UseCart();

  console.log(cart);

  return (
    <CartProvider>
      <div>
        <h3>Aqui va a estar el carrito</h3>
      </div>
    </CartProvider>
  );
};
