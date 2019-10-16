import { API } from "./";

import { IAlbums } from "domain/Album";

export const getAlbums = async (): Promise<IAlbums> => {
  try {
    const response = await API.get<IAlbums>("/albums");
    return response.data;
  } catch (error) {
    return error;
  }
};
