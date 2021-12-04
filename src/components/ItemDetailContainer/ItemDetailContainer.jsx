import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail/ItemDetail';
import Loader from 'react-spinners/ClipLoader';
import { getFirestore } from '../../firebase';
import { doc, getDoc } from '@firebase/firestore';

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const anItem = doc(db, 'products', id);
    getDoc(anItem).then((snapshot) => {
      console.log(snapshot);
      if (snapshot.exists()) {
        setItem({...snapshot.data(), id : id});
        setLoading(false);
      }
    })
    .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="item-detail-container">
      {item && <ItemDetail key={item.referencia} item={item} />}
      {loading && <Loader size={100} />}
    </div>
  );
};
