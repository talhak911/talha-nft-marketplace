import { useEffect } from "react";
import {
  fetchNft,
  clearNfts,
  setArtistName,
} from "../../redux/slices/nftSlice";
import { getNftParamsType } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import { getArtistName } from "../../libs/getArtistNameFun";
import { useParams } from "react-router-dom";

export const useDetails = () => {
  const { contract, identifier } = useParams<getNftParamsType>();
  const dispatch = useAppDispatch();
  const nftState = useAppSelector((state) => state.nft);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    dispatch(clearNfts());
    const fetchData = async () => {
      dispatch(clearNfts());
      if (contract && identifier) {
        const action = await dispatch(
          fetchNft({ contract, identifier })
        ).unwrap();
        const creator = action?.nft?.creator;
        const artistName = await getArtistName(creator);
        dispatch(setArtistName(artistName));
      }
    };

    fetchData();
  }, [dispatch, contract, identifier]);

  return nftState;
};
