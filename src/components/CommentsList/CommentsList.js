import comments from "../../data/video-details.json";

// console.log(comments[0].comments[0].name);
let data = comments[0].comments;
console.log(data);

function CommentsList() {
  return (
    <section className="comments">
      <img className="comments__avatar" alt="round circle" />

      <section className="comments__wrapper">
        <p className="comments__name">{data[0].name}</p>
        <p className="comments__date">
          {new Date(data[0].timestamp).toLocaleDateString()}
        </p>
        <p className="comments__comment">{data[0].comment}</p>
      </section>
    </section>
  );
}

export default CommentsList;
