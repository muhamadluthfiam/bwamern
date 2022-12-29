import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LandingPage from "pages/LandingPage";
import BrowserBy from "pages/BrowserBy";
import ExamplePage from "pages/ExamplePage";
import StoriesPage from "pages/StoriesPage";
import "assets/scss/style.scss";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

function App() {
  return (
    <div className="App">
      <Router history={history} basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/browse-by" component={BrowserBy} />
          <Route path="/stories" component={StoriesPage}/>
          <Route path="/example" component={ExamplePage}/>
        </Switch>
      </Router>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
