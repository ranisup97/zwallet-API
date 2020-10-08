import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { HeaderNav } from "./Components";
import { FooterPage } from "./Components";
import { Sidebar } from "./Components";
import { Home, Transfer, TopUp, Profile} from "./pages";


function App() {
  return (
    <Router>
      <HeaderNav />
      <Sidebar/>
      <Switch>
        {/* <Route exact path="/" render={(props) => <Home {...props} />} /> */}
        {/* <Route path="/transfer" render={(props) => <Transfer {...props} />} /> */}
      </Switch>
      <FooterPage />
    </Router>
  );
}

export default App;
