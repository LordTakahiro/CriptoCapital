import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const ScrollingContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 500px; /* Adjust as needed */
  position: relative;
`;

const ScrollingContent = styled.div`
  display: flex;
  flex-direction: column;
  will-change: transform;
`;

const AutoScroll = ({ children, speed = 0.5 }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const scrollPosition = useRef(0);
  const requestRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      if (isHovered && containerRef.current && contentRef.current) {
        scrollPosition.current += speed;
        if (scrollPosition.current >= contentRef.current.scrollHeight / 2) {
          scrollPosition.current = 0;
        }
        contentRef.current.style.transform = `translateY(-${scrollPosition.current}px)`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestRef.current);
  }, [isHovered, speed]);

  return (
    <ScrollingContainer
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ScrollingContent ref={contentRef}>
        {children}
        {children} {/* Duplicate content for seamless scrolling */}
      </ScrollingContent>
    </ScrollingContainer>
  );
};

export default AutoScroll;
