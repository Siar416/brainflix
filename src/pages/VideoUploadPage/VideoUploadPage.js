import videoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";
import "./VideoUploadPage.scss";
import { Redirect } from "react-router-dom";
import { Component } from "react";
import axios from "axios";
const url = "http://localhost:8000/videos/";
const { v4: uuidv4 } = require("uuid");

class VideoUploadPage extends Component {
  state = {
    isSubmitted: false,
  };

  uploadBtn = (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const desc = event.target.description.value;
    const id = uuidv4();

    if (title && desc) {
      alert("Upload has uploaded successfully");
      axios.post(url, { title, desc, id });

      this.setState({
        isSubmitted: true,
      });
    } else {
      alert("Unable to upload video, form not completed");
    }
  };

  render() {
    if (this.state.isSubmitted) {
      return <Redirect to="/" />;
    }

    return (
      <section className="uploads">
        <section className="uploads__wrapper">
          <h1 className="uploads__title">Upload Video</h1>
          <form className="form" onSubmit={this.uploadBtn}>
            <section className="form__wrapper">
              <section className="form__thumbnail">
                <h2 className="form__thumbnail__title">VIDEO THUMBNAIL</h2>
                <img
                  className="form__thumbnail__image"
                  src={videoThumbnail}
                  alt="person riding a bike"
                />
              </section>
              <section className="form__section">
                <label className="form__section__title">TITLE YOUR VIDEO</label>
                <input
                  name="title"
                  type="text"
                  className="form__section__title-input"
                  placeholder="Add a title to your video"
                />
                <label className="form__section__desc">
                  ADD A VIDEO DESCRIPTION
                </label>
                <input
                  name="description"
                  type="text"
                  className="form__section__desc-input"
                  placeholder="Add a description to your video"
                />
              </section>
            </section>
            <>
              <div className="uploads__button">
                <button className="uploads__button-publish">
                  <img
                    className="uploads__button-publish-icon"
                    src={publishIcon}
                    alt="publish icon"
                  />
                  PUBLISH
                </button>
                <button className="uploads__button-cancel">CANCEL</button>
              </div>
            </>
          </form>
        </section>
      </section>
    );
  }
}
export default VideoUploadPage;
