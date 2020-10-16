import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import landing from "./page/Landing";
import OrphanagesMap from "./page/OrphanagesMap";
import Orphanage from "./page/Orphanage";
import CreateOrphanage from "./page/CreateOrphanage";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={landing} />
          <Route path="/page" component={OrphanagesMap} />
          <Route path="/orphanages/create" component={CreateOrphanage} />
          <Route path="/orphanages/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
