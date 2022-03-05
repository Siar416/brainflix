import React from "react";
import "./global.scss";
import Header from "./components/Header/Header";
import Home from "./Home";

import VideoUploadPage from "./components/VideoUploadPage/VideoUploadPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
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
