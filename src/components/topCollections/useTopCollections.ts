import { useEffect} from 'react';
import { fetchCollections } from '../../redux/slices/CollectionsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

export const useTopCollections = () => {
  
  const dispatch = useAppDispatch();
  const collectionState = useAppSelector((state) => state.collections);

  useEffect(() => {
    if(collectionState.loading !== 'succeeded'){
      dispatch(fetchCollections());
    }
   
  }, [dispatch,collectionState.loading]);

  return collectionState;
};
