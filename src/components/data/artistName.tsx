import { useEffect, useState } from 'react';
import { getArtistName } from "../../data/data";

interface ArtistNameProps {
  creator: string;
}

export const ArtistName: React.FC<ArtistNameProps> = ({ creator }) => {
  const [artistName, setArtistName] = useState<string>('');

  useEffect(() => {
    const fetchArtistName = async () => {
      if (creator) {
        const name = await getArtistName(creator);
        setArtistName(name);
      }
    };
    fetchArtistName();
  }, [creator]);

  return (
    <span className="font-mono text-[16px] text-[#858584] md:text-[22px]">
      Created By {artistName}
    </span>
  );
};
