import comments from "../../data/video-details.json";
import "./CommentsList.scss";

function CommentsList({ comments }) {
  return (
    <>
      {comments.map((comment) => {
        return (
          <section key={comment.id} className="comments__list">
            <section className="comments__wrapper">
              <p className="comments__wrapper__avatar" />
              <p className="comments__wrapper__name">{comment.name}</p>
              <p className="comments__wrapper__date">
                {new Date(comment.timestamp).toLocaleDateString()}
              </p>
            </section>
            <p className="comments__list__comment">{comment.comment}</p>
          </section>
        );
      })}
    </>
  );
}

export default CommentsList;
