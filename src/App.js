import './scss/app.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './contexts/cart/CartContext';
import { CartContainer } from './components/CartContainer/CartContainer';
import { Checkout } from './components/CartContainer/Checkout/Checkout';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/categoria/:categoriaId">
            <ItemListContainer />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <CartContainer />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
    </CartProvider>
  </BrowserRouter>
  );
}

export default App;
