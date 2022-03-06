import React from "react";
import { Component } from "react";
import "../global.scss";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Comments from "../components/Comments/Comments";
import CommentsList from "../components/CommentsList/CommentsList";
import VideosArray from "../components/VideosArray/VideosArray";
import axios from "axios";

const url = "https://project-2-api.herokuapp.com/videos/";
const apiKey = "?api_key=5cb12036-b84f-409c-97eb-5a1b902a3b34";

class Home extends Component {
  state = {
    allVideos: [],
    currentVideo: {},
    comments: [],
  };

  componentDidMount() {
    axios
      .get(url + apiKey)
      .then((response) => {
        this.setState({
          allVideos: response.data,
        });

        const videoId =
          this.props.match.params.id || this.state.allVideos[0].id;

        axios.get(`${url}${videoId}${apiKey}`).then((response) => {
          this.setState({
            comments: response.data.comments,
            currentVideo: response.data,
          });
        });
      })
      .catch((err) => console.log(`${err} Unable to load data`));
  }

  componentDidUpdate(prevProps) {
    const { id } = this.props.match.params;
    if (prevProps.match.params.id && id !== prevProps.match.params.id) {
      axios
        .get(`${url}${this.props.match.params.id}${apiKey}`)
        .then((response) => {
          this.setState({
            currentVideo: response.data,
            comments: response.data.comments,
          });
        })
        .catch((err) => console.log(`${err} Unable to load data`));
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
                handleVideoChange={this.handleVideoChange}
              />
            </section>
          </div>
        </>
      );
    }
  }
}

export default Home;
