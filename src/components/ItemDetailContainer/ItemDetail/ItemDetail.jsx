import { Button } from '../../Button/Button';
import { ItemCount } from '../../ItemCount/ItemCount';

export const ItemDetail = ({ item }) => {

  return (
    <>
      {
        item.map(prod => {
          return (
            <div className="item-detail" key={prod.codigoRaise}> 
              <div className="img-detail">
                <img src={prod.img} alt="" />
              </div>
              <div className="content-detail">
                <div className="info-detail">
                  <h2 className="title-detail">
                    {prod.categoria} {prod.referencia}
                  </h2>
                  <p>{prod.tipoLlaves}</p>
                  <p>Para máquinas: {prod.modeloMaquina}</p>
                  <p>Material {prod.material}</p>
                  <span className="precio-detail">${prod.precio}</span>
                </div>
                <div className="cta-detail">
                  <Button buttonStyle="btn-primary-solid">Comprar</Button>
                </div>
                 <ItemCount initial={0} stock={prod.stock}/> 
              </div>
            </div>
          );
        })
      }
    </>
  )
};
