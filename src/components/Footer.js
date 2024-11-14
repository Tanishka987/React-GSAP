import { useRef } from "react";
import { useGsapFooterHeadline } from "../components/hooks/gsap";

const Footer = () => {
  const footerRef = useRef(null);
  const footerHeadline = useRef(null);

  useGsapFooterHeadline(footerHeadline, footerRef);

  return (
    <section className="footer wrapper" ref={footerRef}>
      <h1 ref={footerHeadline}>Thankyou</h1>
      <p>
        &copy; {new Date().getFullYear()} Crafted by Tanishka Petwal.
      </p>
    </section>
  );
};

export default Footer;
