import openSeaApi from "../axiosInstance/axiosInstance";
import { AccountInfoResponseType } from "../types/types";

export const getArtistName = async (
  address_or_username: string | undefined
): Promise<string> => {
  try {
    const response = await openSeaApi.get<AccountInfoResponseType>(
      `/accounts/${address_or_username}`,
      {
        headers: {
          "x-api-key": process.env.REACT_APP_OPEN_SEA_KEY,
        },
      }
    );

    const artistName = response.data.username || "Unknown artist";
    return artistName;
  } catch (error) {
    return "failed to get user data";
  }
};
