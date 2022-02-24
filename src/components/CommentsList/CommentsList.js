import comments from "../../data/video-details.json";
import "./CommentsList.scss";

console.log(comments[0]);
let data = comments[0].comments;

function CommentsList() {
  return (
    <>
      <section className="comments__list">
        <section className="comments__wrapper">
          <p className="comments__wrapper__avatar" />
          <p className="comments__wrapper__name">{data[0].name}</p>
          <p className="comments__wrapper__date">
            {new Date(data[0].timestamp).toLocaleDateString()}
          </p>
        </section>
        <p className="comments__list__comment">{data[0].comment}</p>
      </section>

      <section className="comments__list">
        <section className="comments__wrapper">
          <p className="comments__wrapper__avatar" />
          <p className="comments__wrapper__name">{data[1].name}</p>
          <p className="comments__wrapper__date">
            {new Date(data[1].timestamp).toLocaleDateString()}
          </p>
        </section>
        <p className="comments__list__comment">{data[1].comment}</p>
      </section>

      <section className="comments__list">
        <section className="comments__wrapper">
          <p className="comments__wrapper__avatar" />
          <p className="comments__wrapper__name">{data[2].name}</p>
          <p className="comments__wrapper__date">
            {new Date(data[2].timestamp).toLocaleDateString()}
          </p>
        </section>
        <p className="comments__list__comment">{data[2].comment}</p>
      </section>
    </>
  );
}

export default CommentsList;
