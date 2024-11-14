import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Sparkle from './sparkle'; // Import the Sparkle component
import './dashboard.css';

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const circleRef = useRef(null);

  // GSAP animation for the circle
  useEffect(() => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33']; // Define your color palette
    let index = 0;

    const changeColor = () => {
      gsap.to(circleRef.current, {
        backgroundColor: colors[index],
        duration: 1,
        onComplete: () => {
          index = (index + 1) % colors.length; // Loop through colors
          changeColor(); // Call the function again for the next color
        }
      });
    };

    // Create a timeline for scaling and rotation
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(circleRef.current, { scale: 1.2, duration: 1 })
      .to(circleRef.current, { scale: 1, duration: 1 })
      .to(circleRef.current, { rotation: 360, duration: 2, ease: "none" }); // Rotate infinitely

    changeColor(); // Start the color change loop
  }, []);

  // Handle circle click to reveal dashboard
  const handleCircleClick = () => {
    setIsOpen(true);
  };
  
  return (
    <div className="main-page">
      {/* Sparkle Effect */}
      <Sparkle />

      {/* Circle for animation */}
      {!isOpen && (
        <div
          className="animated-circle"
          ref={circleRef}
          onClick={handleCircleClick}
        />
      )}

      {/* Dashboard Section */}
      {isOpen && (
        <div className="dashboard">
          <div className="container">
            {/* Announcement */}
            <div className="announcement">
              New products are coming. Join us for Launch Week, Nov 18-21. See what's coming. →
            </div>

            {/* Main Hero Section */}
            <section className="hero1">
              <h1 className="hero-title">Venturing <span className="hover-effect">forever</span>, together.</h1>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;