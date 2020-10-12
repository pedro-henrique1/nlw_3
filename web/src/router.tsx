import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import landing from "./page/Landing";
import Orfanato from "./page/OrphanagesMap";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={landing} />
        <Route path="/page" component={Orfanato} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
