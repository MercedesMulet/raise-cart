import './scss/app.scss';
import { NavBar } from './components/NavBar/NavBar';
import { Greeting } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Greeting user="José"/>
    </div>
  );
}

export default App;
