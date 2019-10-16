import { API } from "./";
import { IPhotos, IPhoto } from "domain/Photo";

export const getAlbumsPhotos = async (id: number): Promise<IPhotos> => {
  try {
    const response = await API.get<IPhotos>(`albums/1/photos?albumId=${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
