import "./CommentsList.scss";

function CommentsList({ comments }) {
  return (
    <>
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="comments__list">
            <div className="comments__wrapper">
              <img className="comments__avatar" />
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
