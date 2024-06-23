import axios from "axios";

interface AccountInfoResponseType {
  address: string;
  username: string;
  profile_image_url: string;
  banner_image_url: string;
  website: string;
  social_media_accounts: {
    platform: string;
    username: string;
  }[];
  bio: string;
  joined_date: string;
}

export const getArtistName = async (address_or_username: string): Promise<string> => {
  try {
    const response = await axios.get<AccountInfoResponseType>(`https://api.opensea.io/api/v2/accounts/${address_or_username}`, {
      headers: {
        accept: 'application/json',
        'x-api-key': process.env.REACT_APP_OPEN_SEA_KEY || '',
      },
    });

    // Extracting the username from the response
    const artistName = response.data.username || "Unknown artist";
    return artistName;
  } catch (error) {
    console.error("Error fetching artist name:", error);
    return "failed to get user data";
  }
};
