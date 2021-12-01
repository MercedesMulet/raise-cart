import { useState, useEffect } from 'react';
import Products from '../../Products.json';
import { ItemList } from '../ItemListContainer/ItemList/ItemList';
import { Loader } from '../Loader/Loader';

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const getData = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject('No se encontraron productos.');
        }
      }, 2000);
    });

  useEffect(() => {
    getData(Products)
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="header-list-container">
        <h1>¡Bienvenido a la tienda de Raise México!</h1>
      </div>
      <div className="item-list-container">
        {products ? <ItemList products={products} /> : <Loader />}
      </div>
    </>
  );
};
