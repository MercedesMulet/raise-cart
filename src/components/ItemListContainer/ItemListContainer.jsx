import { useState, useEffect } from 'react';
import { ItemList } from '../ItemListContainer/ItemList/ItemList';
import { Loader } from '../Loader/Loader';
import { getFirestore } from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useParams } from 'react-router';

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true); 

    const db = getFirestore();

    categoriaId !== undefined ? 
    getDocs(query(collection(db, 'products'), where('categoria', '===', categoriaId)))
    .then((snapshot) => {
        setProducts(snapshot.docs.map((doc) =>{
            return {...doc.data(), id : doc.id}
        }));
    })
    :
    getDocs(collection(db, 'products'))
    .then((snapshot) => {
        setProducts(snapshot.docs.map((doc) => {
            const newArrayProducts = {...doc.data()};
            return newArrayProducts;
        }))
    })
	}, [categoriaId]);

  return (
    <>
      <div className="header-list-container">
        <h1>¡Bienvenido a la tienda de Raise México!</h1>
      </div>
      <div className="item-list-container">
        {products && <ItemList products={products} />}
        {loading && <Loader />}
      </div>
    </>
  );
};
