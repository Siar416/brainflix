import logo from "../../assets/logo/BrainFlix-logo.svg";
import search from "../../assets/icons/search.svg";
import upload from "../../assets/icons/upload.svg";
import "./PageHeader.scss";
import { Link } from "react-router-dom";

function PageHeader() {
  return (
    <main className="header">
      <Link to="/" className="header__logo">
        <img src={logo} alt="brainflex logo" />
      </Link>
      <div className="header__container">
        <form className="header__searchbar">
          <input
            className="header__searchbar-img"
            src={search}
            type="image"
            alt="image of search bar"
          />
          <input
            className="header__searchbar-bar"
            placeholder="Search"
            name="search"
          />
        </form>
        <article className="header__btn-avatar"></article>
      </div>
      <div className="header__btn">
        <Link to="/upload" className="header__btn-upload">
          <button className="header__btn-upload">
            <img
              className="header__btn-upload-img"
              src={upload}
              alt="image of upload icon"
            />
            UPLOAD
          </button>
        </Link>
        <article className="header__btn-avatar header__btn-avatar--hidden"></article>
      </div>
    </main>
  );
}

export default PageHeader;
