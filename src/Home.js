import React from "react";
import { Component } from "react";
import "./App.scss";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Comments from "./components/Comments/Comments";
import CommentsList from "./components/CommentsList/CommentsList";
import VideosArray from "./components/VideosArray/VideosArray";
import axios from "axios";

// "api_key": "5cb12036-b84f-409c-97eb-5a1b902a3b34"

const url = "https://project-2-api.herokuapp.com/videos/";
const apiKey = "?api_key=5cb12036-b84f-409c-97eb-5a1b902a3b34";
// console.log(url + apiKey);

class Home extends Component {
  state = {
    allVideos: [],
    currentVideo: [],
    comments: [],
    sideVideos: [],
  };

  componentDidMount() {
    axios.get(url + apiKey).then((response) => {
      console.log(response);
      console.log("1st");
      this.setState({
        currentVideo: response.data[0],
        allVideos: response.data,
      });

      axios
        .get(`${url}${this.state.currentVideo.id}${apiKey}`)
        .then((response) => {
          console.log("2nd");
          this.setState({
            comments: response.data.comments,
            sideVideos: response.data,
          });
        });
    });
  }

  componentDidUpdate(prevProps) {
    console.log(this.props.match);
    const { id } = this.props.match.params;
    console.log("I updated");
    if (id !== prevProps.match.params.id) {
      console.log("3nd");
      axios
        .get(`${url}${this.props.match.params.id}${apiKey}`)
        .then((response) => {
          this.setState({
            currentVideo: response.data,
            comments: response.data.comments,
          });
        });
    }
  }

  handleVideoChange = (id) => {
    const newVideoId = this.state.allVideos.findIndex(
      (video) => id === video.id
    );
    this.setState({
      currentVideo: this.state.allVideos[newVideoId],
    });
  };

  render() {
    if (
      this.state.allVideos &&
      this.state.currentVideo &&
      this.state.comments &&
      this.state.sideVideos
    ) {
      return (
        <section>
          <Hero current={this.state.currentVideo} />
          <section className="flex__wrapper">
            <div className="flex__wrapper-left">
              <About currentVideo={this.state.currentVideo} />
              <Comments
                currentVideo={this.state.currentVideo}
                comments={this.state.comments}
              />
            </div>
            <div>
              <CommentsList
                comments={this.state.comments}
                currentVideo={this.state.currentVideo}
              />
            </div>
          </section>
          <section className="flex__wrapper-right">
            <VideosArray
              videos={this.state.allVideos}
              currentVideo={this.state.currentVideo}
              handleVideoChange={this.handleVideoChange}
            />
          </section>
        </section>
      );
    }
  }
}

export default Home;
