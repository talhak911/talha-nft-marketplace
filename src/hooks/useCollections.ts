import { useEffect, useRef } from 'react';
import { fetchCollections } from '../redux/slices/nftCollectionsSlice';
import { useAppDispatch, useAppSelector } from './hooks';

export const useCollections = () => {
  
  const dispatch = useAppDispatch();
  const collectionState = useAppSelector((state) => state.collectionsReducer);

  useEffect(() => {
    if(collectionState.loading != 'succeeded'){
      dispatch(fetchCollections());
    }
   
  }, [dispatch]);

  return collectionState;
};
