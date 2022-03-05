import "./CommentsList.scss";

function CommentsList({ comments }) {
  return (
    <>
      {comments.map((comment) => {
        return (
          <section key={comment.id} className="comments__list">
            <section className="comments__wrapper">
              <p className="comments__avatar" />
              <p className="comments__name">{comment.name}</p>
              <p className="comments__date">
                {new Date(comment.timestamp).toLocaleDateString()}
              </p>
            </section>
            <p className="comments__array">{comment.comment}</p>
          </section>
        );
      })}
    </>
  );
}

export default CommentsList;
