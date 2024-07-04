import { useEffect } from 'react';
import { clearNfts, fetchNftsByCollection } from '../../redux/slices/nftsByCollectionSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { FetchNftByCollectionParams } from '../../types/types';
import { useParams } from 'react-router-dom';

export const useCollections = (data: FetchNftByCollectionParams) => {
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: "smooth" });
  },[])
 ;
  const { collectionSlug } = useParams()
  const dispatch = useAppDispatch();
  const { nfts, error, loading } = useAppSelector((state) => state.nftsByCollection);
  useEffect( () => {
    dispatch(clearNfts());
    dispatch(fetchNftsByCollection({ collection_slug:collectionSlug ||"overworld-incarna", limit: data.limit }));
  }, [dispatch,collectionSlug,data.limit]);

  return { nfts, error, loading };
};