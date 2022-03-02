import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
// moved to Home component
// import Hero from "./components/Hero/Hero";
// import About from "./components/About/About";
// import Comments from "./components/Comments/Comments";
// import CommentsList from "./components/CommentsList/CommentsList";
// import VideosArray from "./components/VideosArray/VideosArray";
import VideoUploadPage from "./components/VideoUploadPage/VideoUploadPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//import state below from json file
import videos from "./data/video-details.json";

class App extends React.Component {
  state = { videos: videos, currentVideo: videos[0] };

  handleVideoChange = (id) => {
    const newVideoId = this.state.videos.findIndex((video) => id === video.id);
    this.setState({
      currentVideo: this.state.videos[newVideoId],
    });
  };

  render() {
    return (
      <section>
        <Header />

        {/* // added Video upload page here so I can see styling. Will need to remove */}
        <VideoUploadPage />

        {/* Moved everything below to Home component */}
        {/* <Hero currentVideo={this.state.currentVideo} /> */}
        {/* <section className="flex__wrapper">
          <div className="flex__wrapper-left">
            <About currentVideo={this.state.currentVideo} />
            <Comments currentVideo={this.state.currentVideo} />
            <div>
              <CommentsList currentVideo={this.state.currentVideo} />
            </div>
          </div>
          <section className="flex__wrapper-right">
            <VideosArray
              videos={this.state.videos}
              currentVideo={this.state.currentVideo}
              handleVideoChange={this.handleVideoChange}
            />
          </section>
        </section> */}
      </section>
    );
  }
}

export default App;
