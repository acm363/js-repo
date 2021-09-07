import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CitiesToVisit from "./pages/CitiesToVisit";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Wish from "./pages/Wish";
import * as cities from "./pages/Cities";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cities" component={CitiesToVisit} />
          <Route path="/wishlist" component={Wish} />
          <Route path="/contact" component={Contact} />
          <Route path="/Lille" component={cities.Lille} />
          <Route path="/Paris" component={cities.Paris} />
          <Route path="/Turin" component={cities.Turin} />
          <Route path="/Munich" component={cities.Munich} />
          <Route path="/New-York" component={cities.NewYork} />
          <Route path="/Venise" component={cities.Venise} />
          <Route path="/Dubaï" component={cities.Dubaï}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
