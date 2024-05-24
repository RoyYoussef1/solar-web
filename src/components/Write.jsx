import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../firebaseConfig';

const Write = () => {

    const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const testimonialsCollection = collection(db, 'Testimonials');
      const testimonialsSnapshot = await getDocs(testimonialsCollection);
      const testimonialsList = testimonialsSnapshot.docs.map(doc => doc.data());
      setTestimonials(testimonialsList);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Testimonials</h1>
      <ul>
        {testimonials.map((testimonial, index) => (
          <li key={index}>
            <p><strong>Client Name:</strong> {testimonial.Client_name}</p>
            <p><strong>Position:</strong> {testimonial.Position}</p>
            <p><strong>Testimonial:</strong> {testimonial.Testimonials_text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Write;
