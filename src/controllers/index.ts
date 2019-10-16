import { AlbumsController } from "./AlbumsContoller";
import { PhotosController } from "./PhotosController";

interface RootProps {
  albumsController: AlbumsController;
  photosController: PhotosController;
}

export class RootController implements RootProps {
  albumsController = new AlbumsController(this);
  photosController = new PhotosController(this);
  constructor() {
    this.albumsController = new AlbumsController(this);
    this.photosController = new PhotosController(this);
  }
}

export const rootController = new RootController();
