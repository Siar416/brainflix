import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Comments from "./components/Comments/Comments";
import CommentsList from "./components/CommentsList/CommentsList";
import VideosArray from "./components/VideosArray/VideosArray";

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
        {/* <Hero videos={this.state.videos} /> */}
        <Hero currentVideo={this.state.currentVideo} />
        <section className="flex__wrapper">
          <div className="flex__wrapper-left">
            <About />
            <Comments />
            <div>
              <CommentsList />
            </div>
          </div>
          <section className="flex__wrapper-right">
            {/* <VideosArray data={this.state.videos} /> */}
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

export default App;

// function App() {
//   return (
//     <section>
//       <Header />
//       <Hero />
//       <About />
//       <Comments />
//       <CommentsList />
//     </section>
//   );
// }

// export default App;
