import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Comments from "./components/Comments/Comments";
import CommentsList from "./components/CommentsList/CommentsList";
import VideosArray from "./components/VideosArray/VideosArray";

//import state below from json file
import VideosJSON from "./data/videos.json";

class App extends React.Component {
  state = { vidoes: VideosJSON };

  render() {
    // console.log(this.state);
    return (
      <section>
        <Header />
        <Hero />
        <About />
        <Comments />
        <CommentsList />
        <VideosArray data={this.state.vidoes} />
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
