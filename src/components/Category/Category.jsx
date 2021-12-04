import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../ItemListContainer/ItemList/ItemList';
import { getFirestore } from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { Loader } from '../Loader/Loader';

export const Category = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);
		const db = getFirestore();
    getDocs(query(collection(db, "products"), where("categoryName", "===", categoriaId)))
    .then((snapshot) => {
        setProducts(snapshot.docs.map((doc) =>{
            return {...doc.data()}
        }));
    });
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
