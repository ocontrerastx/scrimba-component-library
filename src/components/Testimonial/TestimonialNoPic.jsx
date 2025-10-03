import "./TestimonialNoPic.css";

export default function TestimonialNoPic({ logo, quote, author, work }) {
  return (
    <div className="testimonial-no-pic">
      <img
        src="../src/assets/dot-pattern.png"
        alt=""
        className="testimonial-background"
      />
      <div className="testimonial-no-pic-content">
        <div className="testimonial-logo">
          <img src={logo} alt="" />
        </div>
        <blockquote>{quote}</blockquote>
        <figcaption>
          <span className="testimonial-author">{author}</span>
          <span className="testimonial-author-divider"> / </span>
          <span className="testimonial-author-work">{work}</span>
        </figcaption>
      </div>
    </div>
  );
}
