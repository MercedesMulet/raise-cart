import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail/ItemDetail';
import Products from '../../Products.json';

export const ItemDetailContainer = () => {
  const [item, setItem] = useState('');
  const { referencia } = useParams();

  const getItem = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject('No existen productos que coincidan con su selección.');
        }
      }, 1000);
    });

  useEffect(() => {
    getItem(Products)
      .then((res) => {
        const filterItem = res.filter(
          (product) => product.referencia === referencia
        );
        setItem(filterItem.shift());
      })
      .catch((err) => console.log(err));
  }, [referencia]);

  return (
    <div className="item-detail-container">
      <div className="item-detail">
        {item ? <ItemDetail item={item} /> : 'Cargando...'}
      </div>
    </div>
  );
};
