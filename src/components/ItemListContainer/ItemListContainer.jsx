import { useState, useEffect } from 'react';
import Products from '../../Products.json';
import { ItemList } from '../ItemListContainer/ItemList/ItemList';
import { Loader } from '../Loader/Loader';

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    getData(Products)
      .then((res) => {
        setProducts(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="header-list-container">
        <h1>¡Bienvenido a la tienda de Raise México!</h1>
      </div>
      <div className="item-list-container">
        {!loading ? <ItemList products={products} /> : <Loader />}
      </div>
    </>
  );
};
