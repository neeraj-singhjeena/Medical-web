import reviews from "./reviewsData";
import ReviewCard from "./ReviewCard";

function Reviews() {
  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center mb-4 fw-bold" style={{ color: "#14b8a6" }}>
            Client Recommendations
          </h2>

          <p className="text-center text-muted mb-5">
            What our global clients say about SpectraCore Analytics
          </p>

          {reviews.map((item) => (
            <ReviewCard key={item.id} review={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
