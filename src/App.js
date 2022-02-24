import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Comments from "./components/Comments/Comments";

function App() {
  return (
    <section>
      <Header />
      <Hero />
      <About />
      <Comments />
    </section>
  );
}

export default App;
