import { useHistory } from "react-router";

export const Popup = (props) => {
  const history = useHistory()

  const closePopUp = () => {
    props.setTrigger(false);
    history.push('/')
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-content">
        <button className="close-btn" onClick={() => closePopUp()}>
          <strong>X</strong> Cerrar
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ''
  );
};
