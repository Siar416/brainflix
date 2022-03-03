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
    sideVideos: [],
    comments: [],
  };

  // apiCall = () => {
  //   axios.get(url + apiKey).get((response) => {
  //     console.log(response);
  //   });
  // };

  //This works
  componentDidMount() {
    axios.get(url + apiKey).then((response) => {
      // console.log(response);
      // const { allVideos, mainVideo, sideVideos } = response.data;
      this.setState({
        // allVideos: response.data,
        currentVideo: response.data[0].image,
        // sideVideos: response.data,
      });

      axios
        .get(url + "84e96018-4022-434e-80bf-000ce4cd12b8" + apiKey)
        .then((response) => {
          this.setState({
            allVideos: response.data,
            comments: response.data.comments,
            current: response.data,
            sideVideos: response.data,
          });
        });
    });
  }

  render() {
    return (
      <section>
        <Hero current={this.state.currentVideo} />
        <section className="flex__wrapper">
          <div className="flex__wrapper-left">
            <About allVideos={this.state.allVideos} />
          </div>
        </section>
      </section>
    );

    // return (
    //   // <section>
    //     {/* <Hero currentVideo={this.state.currentVideo} />
    //     <section className="flex__wrapper">
    //       <div className="flex__wrapper-left">
    //         <About currentVideo={this.state.currentVideo} />
    //         <Comments currentVideo={this.state.currentVideo} />
    //         <div>
    //           <CommentsList currentVideo={this.state.currentVideo} />
    //         </div>
    //       </div>
    //       <section className="flex__wrapper-right">
    //         <VideosArray
    //           videos={this.state.videos}
    //           currentVideo={this.state.currentVideo}
    //           handleVideoChange={this.handleVideoChange}
    //         />
    //       </section>
    //     </section> */}
    //   </section>
    // );
  }
}

export default Home;
