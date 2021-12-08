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
		async function getItems(db) {
			const itemsCol = categoriaId
				? query(
						collection(db, "products"),
						where("categoria", "==", categoriaId)
				  )
				: collection(db, "products");
			const snapshot = await getDocs(itemsCol);
			const itemsList = snapshot.docs.map((doc) => doc.data());
      setLoading(false); 
			return setProducts(itemsList);
		}
		getItems(db);
	}, [categoriaId]);

  return (
    <>
      <div className="header-list-container">
        <h1>¡Bienvenido a la tienda de Raise México!</h1>
      </div>
      <div className="item-list-container">
        {products && <ItemList products={products} categoria={categoriaId}/>}
        {loading && <Loader />}
      </div>
    </>
  );
};
