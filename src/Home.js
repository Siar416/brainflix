import React from "react";
import { Component } from "react";
import "./App.scss";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Comments from "./components/Comments/Comments";
import CommentsList from "./components/CommentsList/CommentsList";
import VideosArray from "./components/VideosArray/VideosArray";

class Home extends Component {
  render() {
    return (
      <section>
        <Hero currentVideo={this.state.currentVideo} />
        <section className="flex__wrapper">
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
        </section>
      </section>
    );
  }
}

export default Home;
