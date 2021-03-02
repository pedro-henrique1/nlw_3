import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";
import Orphanage from "./pages/Orphanage";
import CreateOrphanage from "./pages/CreateOrphanage";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={landing} />
          <Route path="/app" component={OrphanagesMap} />
          <Route path="/orphanages/create" component={CreateOrphanage} />
          <Route path="/orphanages/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
