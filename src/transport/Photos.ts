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

export const getPhoto = async (id: string): Promise<IPhoto> => {
  try {
    const response = await API.get<IPhoto>(`albums/1/photos?id=${id}`)[0];
    return response.data;
  } catch (error) {
    return error;
  }
};
