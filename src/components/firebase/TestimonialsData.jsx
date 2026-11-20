import React from "react";
import CarouselDots, { useSnapCarousel } from "../carousel/CarouselDots";
import "./Testimonials.css";

const testimonials = [
  {
    text: "From the first site visit to the final switch-on, the team was professional and on time. Our electricity bill dropped by more than 60% in the first month.",
    name: "Karim Haddad",
    position: "Homeowner",
  },
  {
    text: "They designed a hybrid system for our restaurant that keeps the kitchen running through every outage. Installation took just two days with zero disruption.",
    name: "Rana Khoury",
    position: "Restaurant Owner",
  },
  {
    text: "Clear advice, honest pricing and excellent after-sales support. The monitoring app lets me see exactly how much energy we produce every day.",
    name: "Georges Nassar",
    position: "Factory Manager",
  },
  {
    text: "We compared several installers and chose them for their equipment quality. Two years later the panels and batteries still perform like day one.",
    name: "Maya Saade",
    position: "School Administrator",
  },
  {
    text: "The maintenance visits are quick and thorough. Any time we had a question, their support team answered within the hour.",
    name: "Hadi Mansour",
    position: "Apartment Building Committee",
  },
  {
    text: "Our farm now runs its irrigation pumps on solar during the day. The system paid for itself much faster than we expected.",
    name: "Lara Fares",
    position: "Agricultural Business Owner",
  },
];

const TestimonialsData = () => {
  const { trackRef, active, onScroll, goTo } = useSnapCarousel();

  return (
    <>
      <div className="testimonial-container" ref={trackRef} onScroll={onScroll}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="testimonial">
            <div className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="client-name">{testimonial.name}</p>
            <p className="client-position">{testimonial.position}</p>
          </div>
        ))}
      </div>
      <CarouselDots count={testimonials.length} active={active} onSelect={goTo} label="testimonial" />
    </>
  );
};

export default TestimonialsData;
