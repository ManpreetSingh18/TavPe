import React, { useEffect } from 'react';
import '../carousel.css'; // Import your CSS file here

export const Carousel = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll("[data-carousel-button]");

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
      });
    });

    const interval = setInterval(() => {
      const slides = document.querySelector("[data-slides]");
      const activeSlide = slides.querySelector("[data-active]");
      let newIndex = [...slides.children].indexOf(activeSlide) + 1;
      if (newIndex >= slides.children.length) newIndex = 0;

      slides.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section aria-label="Newest Photos">
      <div className="carousel" data-carousel>
        <button className="carousel-button prev" data-carousel-button="prev">&#8656;</button>
        <button className="carousel-button next" data-carousel-button="next">&#8658;</button>
        <ul data-slides>
          <li className="slide" data-active>
            <img src="https://images.pexels.com/photos/20352684/pexels-photo-20352684/free-photo-of-interior-of-the-genesis-g90-luxury-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Car Loan Image" />
            <div className="slide-content">
              <h2>Looking For Car Loan</h2>
              <a href="contact" className="button">Apply Now</a>
            </div>
          </li>
          <li className="slide">
            <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Property Loan Image" />
            <div className="slide-content">
              <h2>Looking For Property Loan</h2>
              <a href="contact" className="button">Apply Now</a>
            </div>
          </li>
          <li className="slide">
            <img src="https://cdn.pixabay.com/photo/2024/04/23/16/14/ai-generated-8715598_1280.jpg" alt="Home Loan Image" />
            <div className="slide-content">
              <h2>Looking For Home Loan</h2>
              <a href="contact" className="button">Apply Now</a>
            </div>
          </li>
          <li className="slide">
            <img src="https://cdn.pixabay.com/photo/2018/08/17/14/26/piggy-3612929_1280.jpg" alt="Personal Loan Image" />
            <div className="slide-content">
              <h2>Looking For Personal Loan</h2>
              <a href="contact" className="button">Apply Now</a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
