import { observable, action, computed } from "mobx";

import { RootController } from "./";

import { getAlbums } from "transport/Albums";
import { IAlbums } from "domain/Album";

export class AlbumsController {
  rootContoller: RootController;
  @observable albums: IAlbums = [];
  @observable loading: boolean = true;
  @observable error: string = "";
  @observable searchableValue: string = "";

  constructor(rootController: RootController) {
    this.rootContoller = rootController;
  }

  @action async fetchAlbums(): Promise<void> {
    try {
      const albums = await getAlbums();
      this.albums = albums;
      this.loading = false;
    } catch (error) {
      this.loading = true;
      this.error = error;
    }
  }

  @computed get searchedAlbums() {
    const matchedValue = this.searchableValue.toLowerCase();
    return this.albums.filter(album =>
      album.title.toLowerCase().includes(matchedValue)
    );
  }
}
