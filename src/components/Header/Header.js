import logo from "../../assets/logo/BrainFlix-logo.svg";
import search from "../../assets/icons/search.svg";
import upload from "../../assets/icons/upload.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import "./Header.scss";

function Header() {
  return (
    <section className="header">
      {/* below is the logo */}
      <a className="header__logo" href="#">
        <img src={logo} alt="brainflex logo" />
      </a>

      {/* below is the search field section/form */}
      <section class="header__container">
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
      </section>

      <section className="header__btn">
        <button className="header__btn-upload">
          <img
            className="header__btn-upload-img"
            src={upload}
            alt="image of upload icon"
          />
          UPLOAD
        </button>
      </section>
    </section>
  );
}

export default Header;
