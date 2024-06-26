import { useEffect } from 'react';
import { fetchNft, clearNfts, setArtistName } from '../redux/slices/nftSlice';
import { getNftParamsType } from '../types/types';
import { useAppDispatch, useAppSelector } from './hooks';
import { getArtistName } from '../data/data';

export const useNft = ({ contract, identifier }: getNftParamsType) => {
  const dispatch = useAppDispatch();
  const nftState = useAppSelector((state) => state.nftReducer);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    dispatch(clearNfts());
    if (contract && identifier) {
      dispatch(fetchNft({ contract, identifier })).then(async (action) => {
        if (fetchNft.fulfilled.match(action)) {
          const creator = action.payload.nft.creator;
          const artistName = await getArtistName(creator);
          dispatch(setArtistName(artistName));
        }
      });
    }
  }, [dispatch, contract, identifier]);

  return nftState;
};
