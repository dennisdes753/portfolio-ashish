import React, { useState, useEffect, useRef } from 'react';
import Banner from '../component/banner/banner'
import About from '../component/about/about'
import Projects from '../component/projects/projects'
import Development from '../component/development-skills/development'
import Experience from '../component/experience/experience'
import Footer from '../component/Footer/footer'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { AnimatePresence, motion } from 'framer-motion'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import './homepage.scss'

function Homepage() {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulating a loading delay with setTimeout
    const timeout = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds (simulating data loading)
    }, 2000);

    return () => clearTimeout(timeout); // Cleanup function to clear timeout
  }, []);

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
          {loading ? ( // If loading is true, display the preloader
            <motion.div
              className="preloader"
              data-scroll-speed="3"
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 2 }}
            >
              <h4>Namaste</h4>
              <h1>Welcome To My Portfolio</h1>
            </motion.div>
          ):(
            <main className="portfolio_base" data-scroll-container ref={containerRef}>
              <Banner />
              <About />
              <Projects/>
              <Development/>
              <Experience />
              <Footer/>
            </main>
          )}  
        </AnimatePresence>  
      </LocomotiveScrollProvider>
    </>
  )
}

export default Homepage