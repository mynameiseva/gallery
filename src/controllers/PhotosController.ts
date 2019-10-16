import { observable, action, computed } from "mobx";

import { RootController } from "./";

import { IPhotos } from "domain/Photo";
import { getAlbumsPhotos } from "transport/Photos";

export class PhotosController {
  rootContoller: RootController;
  @observable albumsPhotos: IPhotos = [];
  @observable loading: boolean = true;
  @observable error: string = "";
  @observable searchableValue: string = "";

  constructor(rootController: RootController) {
    this.rootContoller = rootController;
  }

  @action async fetchAlbumsPhotos(id: number): Promise<void> {
    try {
      const albumsPhotos = await getAlbumsPhotos(id);
      this.albumsPhotos = albumsPhotos;
      this.loading = false;
    } catch (error) {
      this.loading = true;
      this.error = error.code;
    }
  }

  @computed get searchedPhotos() {
    const matchedValue = this.searchableValue.toLowerCase();
    return this.albumsPhotos.filter(album =>
      album.title.toLowerCase().includes(matchedValue)
    );
  }
}
