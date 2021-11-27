import './scss/app.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Category } from './components/Category/Category';
import { CartProvider } from './contexts/cart/CartContext';
import { CartContainer } from './components/CartContainer/CartContainer';

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
            <Category />
          </Route>
          <Route exact path="/item/:referencia">
            <ItemDetailContainer />
          </Route>
          <Route path="/cart">
            <CartContainer />
          </Route>
        </Switch>
    </CartProvider>
  </BrowserRouter>
  );
}

export default App;
