import React, {useRef} from 'react'
import Banner from '../component/banner/banner'
import About from '../component/about/about'
import Projects from '../component/projects/projects'
import Development from '../component/development-skills/development'
import Experience from '../component/experience/experience'
import Footer from '../component/Footer/footer'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { AnimatePresence } from 'framer-motion'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import './homepage.scss'

function Homepage() {
  const containerRef = useRef(null)
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