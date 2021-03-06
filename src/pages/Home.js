import React from "react";
import { Component } from "react";
import "../global.scss";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Comments from "../components/Comments/Comments";
import CommentsList from "../components/CommentsList/CommentsList";
import VideosArray from "../components/VideosArray/VideosArray";
import axios from "axios";

const url = "http://localhost:8000/videos/";

class Home extends Component {
  state = {
    allVideos: [],
    currentVideo: {},
    comments: [],
  };

  componentDidMount() {
    axios
      .get(url)
      .then((response) => {
        this.setState({
          allVideos: response.data,
        });
      })
      .catch((err) => {
        console.log(`${err} unable to load data`);
      });
  }

  componentDidUpdate(prevProps) {
    const videoId = this.props.match.params.id || this.state.allVideos[0].id;

    if (prevProps.match.params.id !== videoId) {
      axios
        .get(`${url}${videoId}`)
        .then((response) => {
          this.setState({
            currentVideo: response.data,
            comments: response.data.comments,
          });
        })
        .catch((err) => console.log(`${err} Unable to load data`));
    }
  }

  render() {
    if (
      this.state.allVideos &&
      this.state.currentVideo &&
      this.state.comments
    ) {
      return (
        <>
          <Hero current={this.state.currentVideo} />
          <div className="flex__wrapper">
            <div className="flex__wrapper-left">
              <About
                currentVideo={this.state.currentVideo}
                allVideos={this.state.allVideos}
              />
              <Comments
                currentVideo={this.state.currentVideo}
                comments={this.state.comments}
              />
              <div>
                <CommentsList
                  comments={this.state.comments}
                  currentVideo={this.state.currentVideo}
                />
              </div>
            </div>

            <section className="flex__wrapper-right">
              <VideosArray
                videos={this.state.allVideos}
                currentVideo={this.state.currentVideo}
              />
            </section>
          </div>
        </>
      );
    }
  }
}

export default Home;
