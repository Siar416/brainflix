import videoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";
import "./VideoUploadPage.scss";
import { Link } from "react-router-dom";

function VideoUploadPage() {
  const uploadBtn = (event) => {
    event.preventDefault();
    alert("Thank you! You're video has been uploaded!");
  };

  return (
    <section className="uploads">
      <section className="uploads__wrapper">
        <h1 className="uploads__title">Upload Video</h1>
        <form className="form">
          <section className="form__thumbnail">
            <h2 className="form__thumbnail__title">VIDEO THUMBNAIL</h2>
            <img
              className="form__thumbnail__image"
              src={videoThumbnail}
              alt="image of person riding a bike"
            />
          </section>
          <section className="form__section">
            <h2 className="form__section__title">TITLE YOUR VIDEO</h2>
            <input
              name="title"
              type="text"
              className="form__section__title-input"
              placeholder="Add a title to your video"
            />
            <h2 className="form__section__desc">ADD A VIDEO DESCRIPTION</h2>
            <input
              name="description"
              type="text"
              className="form__section__desc-input"
              placeholder="Add a description to your video"
            />
          </section>
        </form>
        <section className="uploads__button">
          <button className="uploads__button-publish" onClick={uploadBtn}>
            <Link to="/">
              <img
                className="uploads__button-publish-icon"
                src={publishIcon}
                alt="publish icon"
              />
              PUBLISH
            </Link>
          </button>

          <button className="uploads__button-cancel">CANCEL</button>
        </section>
      </section>
    </section>
  );
}

export default VideoUploadPage;
