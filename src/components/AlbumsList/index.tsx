import * as React from "react";

import { inject, observer } from "mobx-react";
import { List, ListItem, ListItemText, TextField } from "@material-ui/core";

import { AlbumsController } from "controllers/AlbumsContoller";

import { Spinner, Container, Link, Title, ZeroScreen } from "components/Common";

interface Props {
  albumsController?: AlbumsController;
}

@inject("albumsController")
@observer
export class AlbumsList extends React.Component<Props> {
  componentDidMount() {
    this.props.albumsController.fetchAlbums();
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.albumsController.searchableValue = e.target.value;
  };

  render() {
    const {
      albums,
      loading,
      error,
      searchableValue,
      searchedAlbums,
    } = this.props.albumsController;
    return (
      <Container>
        <Title variant="h5">Albums</Title>
        <TextField
          label="Search Albums"
          placeholder="Search albums"
          value={searchableValue}
          onChange={this.handleChange}
          margin="normal"
        />
        {loading && <Spinner />}
        {(searchedAlbums.length === 0 || albums.length === 0) && !loading && (
          <ZeroScreen>Sorry, we have no such albums :(</ZeroScreen>
        )}
        {albums.length > 0 && !loading && (
          <List>
            {searchedAlbums.map(album => (
              <Link key={album.id} to={`/album/${album.id}`}>
                <ListItem button dense>
                  <ListItemText primary={`${album.title}`} />
                </ListItem>
              </Link>
            ))}
          </List>
        )}
        {error && <Title variant="h6">Something went wrong...</Title>}
      </Container>
    );
  }
}
