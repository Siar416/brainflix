import React from "react";
import "./global.scss";
import PageHeader from "./components/PageHeader/PageHeader";
import Home from "./Home";

import VideoUploadPage from "./components/VideoUploadPage/VideoUploadPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/upload" component={VideoUploadPage} />
        <Route
          path="/videos/:id"
          render={(routerProps) => {
            return <Home {...routerProps} />;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
