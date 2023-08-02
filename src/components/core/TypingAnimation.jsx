import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function TypingAnimation() {
  const typeRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Full Stack Developer',
        'Web Developer',
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    };

    const typed = new Typed(typeRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="items-start">
      <span ref={typeRef} className="text-3xl "> </span>
    </div>
  );
}

export default TypingAnimation;
