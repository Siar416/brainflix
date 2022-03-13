import "./CommentsList.scss";
const { v4: uuidv4 } = require("uuid");

function CommentsList({ comments }) {
  return (
    <>
      {comments.map((comment) => {
        return (
          <div key={uuidv4()} className="comments__list">
            <div className="comments__wrapper">
              <img className="comments__avatar" alt="avatar" />
              <p className="comments__name">{comment.name}</p>
              <p className="comments__date">
                {new Date(comment.timestamp).toLocaleDateString()}
              </p>
            </div>
            <p className="comments__array">{comment.comment}</p>
          </div>
        );
      })}
    </>
  );
}

export default CommentsList;
