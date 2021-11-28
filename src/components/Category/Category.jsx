import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../../Products.json';
import { ItemList } from '../ItemListContainer/ItemList/ItemList';

export const Category = () => {
  const [products, setProducts] = useState([]);
  const { categoriaId } = useParams();

  const getData = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject('No se encontraron productos de esta categoria.');
        }
      }, 1000);
    });

  useEffect(() => {
    getData(Products)
      .then((res) =>
        setProducts(res.filter((items) => items.categoria === categoriaId))
      )
      .catch((err) => console.log(err));
  }, [categoriaId]);

  return (
    <>
      <div className="header-list-container">
        <h1>¡Bienvenido a la tienda de Raise México!</h1>
      </div>
      <div className="item-list-container">
        <ItemList products={products} />
      </div>
    </>
  );
};
