import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Still on the fence? Here's what our users are saying</h2>
      <div className="testimonial-container">
        <img src="path/to/ama-sunshine-photo.jpg" alt="Ama Sunshine" />
        <blockquote>
          <p>
            Tontineo is a really good app and it has made my life easier. I can
            now organize our tontine members in a uniform way. Our
            contributions are safe, and secure.
          </p>
          <cite>Ama Sunshine, Entrepreneur & Tontine Leader</cite>
        </blockquote>
      </div>
      <div className="testimonial-container">
        <img src="path/to/oluwa-bunmi-photo.jpg" alt="Oluwa Bunmi" />
        <blockquote>
          <p>
            {/* Add Oluwa Bunmi's testimonial here */}
          </p>
          <cite>Oluwa Bunmi, [Title or Role]</cite>
        </blockquote>
      </div>
      <div className="testimonial-container">
        <img src="path/to/nkwi-loh-photo.jpg" alt="Nkwi Loh" />
        <blockquote>
          <p>
            {/* Add Nkwi Loh's testimonial here */}
          </p>
          <cite>Nkwi Loh, [Title or Role]</cite>
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonials;
