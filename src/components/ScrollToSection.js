// ScrollToSection.js
import React, { useRef, useEffect } from 'react';

const ScrollToSection = ({ sectionRef, scroll }) => {
  useEffect(() => {
    if (scroll && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [scroll, sectionRef]);

  return null;
};

export default ScrollToSection;
