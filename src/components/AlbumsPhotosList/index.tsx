import * as React from "react";

import { RouteComponentProps } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { CardHeader } from "@material-ui/core";

import { Container, Spinner, Title, ZeroScreen } from "components/Common/";
import { PhotosController } from "controllers/PhotosController";

import { Card, CardMedia } from "./styled";

interface Props extends RouteComponentProps<{ id: string }> {
  photosController?: PhotosController;
}

@inject("photosController")
@observer
export class AlbumsPhotosList extends React.Component<Props> {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.photosController.fetchAlbumsPhotos(parseInt(id));
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.photosController.searchableValue = e.target.value;
  };

  render() {
    const {
      albumsPhotos,
      loading,
      error,
      searchableValue,
      searchedPhotos
    } = this.props.photosController;
    return (
      <Container>
        <Title variant="h5">Photos</Title>
        <input
          type="text"
          value={searchableValue}
          onChange={this.handleChange}
        />
        {loading && <Spinner />}
        {(albumsPhotos.length === 0 || searchedPhotos.length === 0) && !loading && (
          <ZeroScreen>Sorry, we have no such photos :(</ZeroScreen>
        )}
        {albumsPhotos.length > 0 && !loading && (
          <>
            {searchedPhotos.map(photo => (
              <Card key={photo.id} raised={true}>
                <CardHeader title={`${photo.title}`} />
                <CardMedia image={photo.thumbnailUrl} title="Amazing image" />
              </Card>
            ))}
          </>
        )}
        {error && <Title variant="h6">Something went wrong...</Title>}
      </Container>
    );
  }
}
