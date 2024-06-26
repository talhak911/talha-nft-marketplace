import { useEffect, useState } from "react";
import { ArtistNameProps } from "../types/types";
import { getArtistName } from "../data/data";




export const useArtistName =({ creator }:ArtistNameProps)=>{
  const [artistName, setArtistName] = useState<string>("");
    
  useEffect(() => {
    const fetchArtistName = async () => {
      if (creator) {
        const name = await getArtistName(creator);
        setArtistName(name);
      }
    };
    fetchArtistName();
  }, [creator])

  return (artistName)
};
