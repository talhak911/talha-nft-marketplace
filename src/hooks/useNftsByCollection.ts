import { useEffect } from 'react';
import { clearNfts, fetchNftsByCollection } from '../redux/slices/nftsByCollectionSlice';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchNftByCollectionParams } from '../types/types';

export const useNftsByCollections = (data: fetchNftByCollectionParams) => {
  const dispatch = useAppDispatch();
  const { nfts, error, loading } = useAppSelector((state) => state.nftsByCollectionReducer);
  useEffect(() => {
    dispatch(clearNfts());
    dispatch(fetchNftsByCollection({ collection_slug: data.collection_slug, limit: data.limit }));
  }, [dispatch]);

  return { nfts, error, loading };
};