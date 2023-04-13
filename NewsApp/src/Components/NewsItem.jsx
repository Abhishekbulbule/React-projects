

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } =
    props;

  return (
    <div className="my-3 ">
      <div className="card">
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2023%2F02%2FUntitled-design-2023-02-24T114453.039.jpg&signature=59816cc90f1cc7b49befe37d2db1e241"
          }
          className="card-img-top p-2  "
          height={"180px"}
          width={"180px"}
          alt="..."
        />
        <div className="card-body text-center " style={{ width: "20rem" }}>
          <h5 className="card-title">{title}...</h5>

          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%" }}
          >
            {source}
          </span>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on{" "}
              {new Date(date).toTimeString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
