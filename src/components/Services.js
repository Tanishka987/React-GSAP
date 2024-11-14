import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import './services.css';
import img1 from "../components/images/image1.PNG";
import img2 from "../components/images/image2.PNG";
import img3 from "../components/images/image4.PNG";
import img4 from "../components/images/image5.PNG";
import center from "../components/images/center.PNG";

const Services = () => {

    const image1Ref = useRef(null);
    const image2Ref = useRef(null);
    const image3Ref = useRef(null);
    const image4Ref = useRef(null);
    const centerImageRef = useRef(null);

    useLayoutEffect(() => {
      // Animation for the center image to pop in first
      gsap.fromTo(centerImageRef.current, 
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, ease: 'power2.out' }
      );

      // GSAP animation for gentle up-and-down floating effect on other images
      const images = [image1Ref, image2Ref, image3Ref, image4Ref];
      images.forEach((imgRef, index) => {
        gsap.to(imgRef.current, {
          
          y: 20, // Move vertically 20px up and down
          duration: 2 + index * 0.5, // Slight stagger for each image
          repeat: -1, // Infinite repeat
          yoyo: true, // Go back to original position
          ease: 'power1.inOut', // Smooth easing
        });
      });
    }, []);

    return (
      <div className='services'>
        <div className='heading'>Services</div>
        <div className="images-container">
          {/* First two images */}
          <div className="image-row">
            <div ref={image1Ref}>
              <img className="image" src={img1} alt="Image 1" />
              <div className='sub'>Service Layer</div>
            </div>
            <div ref={image2Ref}>
              <img className="image" src={img2} alt="Image 2" />
              <div className='sub'>Web3 for Good</div>
            </div>
          </div>

          {/* Center Image with static beam effect */}
          <div className="center-container" ref={centerImageRef}>
            <img className="center-image" src={center} alt="Center" />
          </div>

          {/* Last two images */}
          <div className="image-row">
            <div ref={image3Ref}>
              <img className="image" src={img3} alt="Image 3" />
              <div className='sub'>Redefining Institutions</div>
            </div>
            <div ref={image4Ref}>
              <img className="image" src={img4} alt="Image 4" />
              <div className='sub'>Spreading Pragmatic Philosophy</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Services;
