export const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-content">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          <strong>X</strong> Cerrar
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ''
  );
};
