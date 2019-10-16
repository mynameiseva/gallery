export interface IAlbum {
  userId: number;
  id: number;
  title: string;
}

export interface IAlbums extends Array<IAlbum> {}
