import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail/ItemDetail';
import Products from '../../Products.json';

export const ItemDetailContainer = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const { id } = useParams();
  const itemId = parseInt(id);

  const getItem = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject('No existen productos que coincidan con su selección.');
        }
      }, 2000);
    });

  useEffect(() => {
    getItem(Products)
      .then((res) => {
        /* const filterItem = Products.find(
          (product) => product.codigoRaise === itemId
        ); */
        setSelectedItem(res[0]);
      })
      .catch((err) => console.log(err));
  }, [itemId]);

  return (
    <div className="item-detail-container">
      <div className="item-detail">
        {selectedItem ? <ItemDetail item={selectedItem} /> : 'Cargando...'}
      </div>
    </div>
  );
};
