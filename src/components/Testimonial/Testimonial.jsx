import "./Testimonial.css";

export default function Testimonial() {
  return (
    <div className="testimonial">
      <div className="testimonial-content">
        <div className="testimonial-picture">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
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
            <blockquote>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
              nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
              adipiscing nunc urna, sit.
            </blockquote>
            <figcaption>
              <p className="testimonial-author">May Andersons</p>
              <p className="testimonial-author-work">Workcation, CTO</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
