import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import "./Testimonials.css";

const TestimonialsData = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const testimonialsCollection = collection(db, "Testimonials");
      const testimonialsSnapshot = await getDocs(testimonialsCollection);
      const testimonialsList = testimonialsSnapshot.docs.map((doc) =>
        doc.data()
      );
      setTestimonials(testimonialsList);
    };

    fetchData();
  }, []);

  return (
    <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <p className="testimonial-text">
                {testimonial.Testimonials_text}
              </p>
              <p className="client-name">{testimonial.Client_name}</p>
              <p className="client-position">{testimonial.Position}</p>
            </div>
        ))}
    </div>
  );
};

export default TestimonialsData;
