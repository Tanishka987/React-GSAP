import { useRef } from "react";
import {
  useGsapFeaturedLeftShutter,
  useGsapFeaturedRightShutter,
} from "../components/hooks/gsap";
import SectionTitle from "./SectionTitle";


const Featured = ({ minHeight = false }) => {
  const featuredRef = useRef(null);
  const featuredLeftShutter = useRef(null);
  const featuredRightShutter = useRef(null);

  useGsapFeaturedLeftShutter(featuredLeftShutter, featuredRef);
  useGsapFeaturedRightShutter(featuredRightShutter, featuredRef);

  return (
    
    <section
      className="featured wrapper"
      ref={featuredRef}
      style={minHeight ? { minHeight: "100vh" } : null}
    >
      <SectionTitle title="Featured" />
      <div className="featured-wrapper">
        <div className="featured-left">
          <span>Positive Impacts</span>
          <img
            src="https://img.freepik.com/free-photo/low-angle-view-businessman-celebrating-his-success_23-2148176198.jpg?semt=ais_hybrid"
            alt="Photo of Man"
          />
          <span className="left-shutter" ref={featuredLeftShutter}></span>
        </div>
        <div className="featured-right">
          <span>Constant Innovation</span>
          <img
            src="https://img.freepik.com/free-photo/portrait-woman-holding-idea-light_23-2148513862.jpg?semt=ais_hybrid"
            alt="Women thinking"
          />
          <span className="right-shutter" ref={featuredRightShutter}></span>
        </div>
      </div>
    </section>
  );
};

export default Featured;
