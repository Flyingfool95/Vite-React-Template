/* Imports */
//Styles
import "./Slider.scss"
//Keen slider
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

/* Component - Keen Slider */
export default function Slider() {

  //Variables
  const [ref] = useKeenSlider<HTMLDivElement>();

  /* JSX */
  return (
    <div ref={ref} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <img src="https://images.unsplash.com/photo-1672501426705-072bdfcf358c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1732&q=80" alt="img 1" />
      </div>
      <div className="keen-slider__slide number-slide2">
        <img src="https://images.unsplash.com/photo-1671438799298-3fdc6c0f5f03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80" alt="img 2" />
      </div>
    </div>
  );
}
