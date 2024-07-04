import { useEffect } from "react";
import { fetchCollections } from "../../redux/slices/collectionsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";

export const useTopCollections = () => {
  const dispatch = useAppDispatch();
  const collectionState = useAppSelector((state) => state.collections);

  useEffect(() => {
    const fetchData = async () => {
      if (collectionState.loading !== "succeeded") {
        await dispatch(fetchCollections());
      }
    };
    fetchData();
  }, [dispatch, collectionState.loading]);

  return collectionState;
};
