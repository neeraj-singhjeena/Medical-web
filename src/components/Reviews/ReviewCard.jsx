function ReviewCard({ review }) {
  return (
    <div
      className="card shadow-sm mb-4 border-0"
      style={{ borderLeft: "5px solid #14b8a6" }}
    >
      <div className="card-body">
        {/* TOP: Avatar + Name */}
        <div className="d-flex align-items-start mb-3">
          {/* Avatar */}
          <div
            className="rounded-circle d-flex align-items-center justify-content-center me-3"
            style={{
              width: "48px",
              height: "48px",
              backgroundColor: "#14b8a6",
              color: "white",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            {review.name.charAt(0)}
          </div>

          <div>
            <h6 className="mb-0 fw-bold">{review.name}</h6>
            <small className="text-muted">{review.designation}</small>
          </div>
        </div>

        {/* QUOTE */}
        <p className="fst-italic mb-3">“{review.review}”</p>

        {/* FOOTER */}
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">{review.date}</small>

          {/* Optional rating */}
          <span style={{ color: "#facc15" }}>★★★★★</span>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
