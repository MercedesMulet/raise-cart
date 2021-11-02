import React from 'react';
import { Button } from '../../Button/Button';

export const ItemDetail = ({ item }) => {
  return (
    <div className="item-detail">
      <div className="img-detail">
        <img src={item.img} alt="" />
      </div>
      <div className="content-detail">
        <div className="info-detail">
          <h2 className="title-detail">
            {item.categoria} {item.referencia}
          </h2>
          <p>{item.tipoLlaves}</p>
          <p>Para máquinas: {item.modeloMaquina}</p>
          <p>Material {item.material}</p>
          <span className="precio-detail">${item.precio}</span>
        </div>
        <div className="cta-detail">
          <Button buttonStyle="btn-primary-solid">Comprar</Button>
        </div>
      </div>
    </div>
  );
};
