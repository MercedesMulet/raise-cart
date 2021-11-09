import './scss/app.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Category } from './components/Category/Category';

function App() {
  return (
    <BrowserRouter>
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
    </Switch>
  </BrowserRouter>
  );
}

export default App;
