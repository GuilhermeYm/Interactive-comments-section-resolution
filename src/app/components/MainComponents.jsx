import "./styles/styleMain.css";

export default function MainComponents() {
  return (
    <main className="container">
      <div className="comments">
        <div className="comment">
          <div className="upvote-downvote">
            <img
              src="/images/icon-plus.svg"
              alt="Upvote"
              className="upvote"
            />
            <p className="value-upvotedownvote">12</p>
            <img src="/images/icon-minus.svg" alt="Downvote" className="downvote" />
          </div>
          <div className="informations-content">
            <div className="informations">
              <img
                src="/images/avatars/image-amyrobson.png"
                alt="Icon"
                className="icon"
              />
              <p className="name">amyrobson</p>
              <p className="time">1 month ago</p>
            </div>
            <div className="content">
              <p>
                Impressive! Though it seems the drag feature could be improved.
                But overall it looks incredible. You've nailed the design and
                the responsiveness at various breakpoints works really well
              </p>
            </div>
          </div>
          <div className="reply">
            <img src="/images/icon-reply.svg" alt="Reply" />
            <p>Reply</p>
          </div>
        </div>
      </div>
      <div className="add-comment">
        <div className="my-icon">
          <img src="/images/avatars/image-juliusomo.png" alt="Me" />
        </div>
        <div className="input-comment">
          <textarea
            id="input_comment"
            rows="4"
            placeholder="Add a comment"
          ></textarea>
        </div>
        <div className="button-send">
          <button className="button-default">Send</button>
        </div>
      </div>
    </main>
  );
}
