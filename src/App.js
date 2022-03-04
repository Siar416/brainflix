import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./Home";

// moved to Home component
// import Hero from "./components/Hero/Hero";
// import About from "./components/About/About";
// import Comments from "./components/Comments/Comments";
// import CommentsList from "./components/CommentsList/CommentsList";
// import VideosArray from "./components/VideosArray/VideosArray";
import VideoUploadPage from "./components/VideoUploadPage/VideoUploadPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//import state below from json file
import videos from "./data/video-details.json";
import reactRouterDom from "react-router-dom";

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
