import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { rootController } from "./controllers/";

import { AlbumsPhotosList } from "components/AlbumsPhotosList";
import { AlbumsList } from "components/AlbumsList";

const Root = (
  <Provider {...rootController}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AlbumsList} />
        <Route exact path="/album/:id" component={AlbumsPhotosList} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(Root, document.getElementById("app"));
