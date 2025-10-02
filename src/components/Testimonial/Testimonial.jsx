import "./Testimonial.css";

export default function Testimonial({ picture, quote, author, work }) {
  return (
    <div className="testimonial">
      <div className="testimonial-content">
        <div className="testimonial-picture">
          <img
            src={picture}
            alt={`Picture of ${author}`}
            className="testimonial-portrait"
          />
        </div>
        <div className="testimonial-text">
          <figure>
            <img
              src="../../src/assets/quote-icon.png"
              alt=""
              className="quote-icon"
            />
            <blockquote>{quote}</blockquote>
            <figcaption>
              <p className="testimonial-author">{author}</p>
              <p className="testimonial-author-work">{work}</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
