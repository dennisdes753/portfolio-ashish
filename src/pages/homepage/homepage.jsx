import React, { useState, useEffect, useRef } from 'react';
import Banner from '../component/banner/banner'
import About from '../component/about/about'
import Projects from '../component/projects/projects'
import Development from '../component/development-skills/development'
import Experience from '../component/experience/experience'
import Footer from '../component/Footer/footer'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import { gsap } from 'gsap';
import 'locomotive-scroll/dist/locomotive-scroll.css'
import './homepage.scss'

function Homepage() {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  let mouseX = 0;
  let mouseY = 0;

  useEffect(() => {
    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        gsap.set(cursorRef.current, {
          left: mouseX,
          top: mouseY
        });
      }
    });

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array to run this effect only once

  const handleMouseMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  // Attach event listener when component mounts
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array to run this effect only once
  return (
    <>
      <LocomotiveScrollProvider
        options={
          {
            smooth: true,
          }
        }
        watch={
          [
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
      >
        <AnimatePresence>
            <main className="portfolio_base" data-scroll-container ref={containerRef}>
            <div className="cursor" ref={cursorRef}></div>
              <Banner />
              <About />
              <Projects/>
              <Development/>
              <Experience />
              <Footer/>
            </main>
         
        </AnimatePresence>  
      </LocomotiveScrollProvider>
    </>
  )
}

export default Homepage