import avatar from "../../assets/images/Mohan-muruge.jpg";
import plusSign from "../../assets/icons/add_comment.svg";
import "./Comments.scss";

function Comments({ comments }) {
  return (
    <section className="comments">
      <h2 className="comments__header">{comments.length} Comments</h2>
      <section className="comments__form">
        <img
          className="comments__form__img"
          src={avatar}
          alt="image of Mohan"
        />
        <section className="comments__input">
          <form className="comments__input-field">
            <section className="comments__input-field-txt">
              <h2>JOIN THE CONVERSATION</h2>
              <input
                className="comments__textarea"
                name="comment"
                placeholder="Add a new comment"
              />
            </section>
            <section className="comments__btn">
              <button
                className="comments__btn-submit"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <img
                  className="comments__btn-submit-img"
                  src={plusSign}
                  alt="image of plus sign"
                />
                COMMENT
              </button>
            </section>
          </form>
        </section>
      </section>
    </section>
  );
}

export default Comments;
