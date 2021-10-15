import { ItemCount } from '../ItemCount/ItemCount';

export const Greeting = (props) => {
  return (
    <div className="item-list-container">
      <h1>¡Bienvenido {props.user}!</h1>
      <ItemCount initial={1} stock={5} />
    </div>
  );
};
