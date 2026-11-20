import { useRef, useState } from "react";
import "./CarouselDots.css";

export const useSnapCarousel = () => {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const track = trackRef.current;
    if (!track || !track.children.length) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let best = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const childCenter = child.offsetLeft - track.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(childCenter - center);
      if (dist < best) {
        best = dist;
        closest = i;
      }
    });
    setActive(closest);
  };

  const goTo = (index) => {
    const track = trackRef.current;
    const card = track && track.children[index];
    if (!card) return;
    const left = card.offsetLeft - track.offsetLeft - (track.clientWidth - card.offsetWidth) / 2;
    track.scrollTo({ left, behavior: "smooth" });
  };

  return { trackRef, active, onScroll, goTo };
};

const CarouselDots = ({ count, active, onSelect, label = "slide" }) => (
  <div className="carousel-dots">
    {Array.from({ length: count }).map((_, i) => (
      <button
        key={i}
        type="button"
        className={`carousel-dot ${i === active ? "active" : ""}`}
        onClick={() => onSelect(i)}
        aria-label={`Show ${label} ${i + 1}`}
      />
    ))}
  </div>
);

export default CarouselDots;
