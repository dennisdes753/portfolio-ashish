import React, { useState, useEffect, useRef } from "react"
import {Container, Row, Col, Image} from 'react-bootstrap'
import { ProjectBanner, Laptop, ProjectImage1, ProjectImage2, ProjectImage3 } from '../../../assets/images/img'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './projects.scss'

function Projects() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);
  return (
    <>
        <section className="projects_section">
            <Container>
                <Row>
                    <Col xxl="12" md="12" xs="12">
                        <motion.div
                            className="projects_inner"
                            data-scroll
                            data-scroll-speed="2"
                            initial={{ y: -360 }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1.5}}
                        >
                            <div className="project_description">
                                <Slider
                                    asNavFor={nav1}
                                    ref={slider => (sliderRef2 = slider)}
                                    infinite = {true}
                                    slidesToShow={1}
                                    swipeToSlide={true}
                                    focusOnSelect={true}
                                    arrows = {false}
                                >
                                    <div>
                                        <p>"Meta Game" is an innovative project merging the realms of blockchain, airdrop mechanisms, and the metaverse.</p>
                                    </div>
                                    <div>
                                          <p>"Proficient in user research, wireframing, prototyping, and collaborating with cross-functional teams to deliver impactful designs.</p>
                                    </div>
                                    <div>
                                          <p>"Personalised Health Plans, 3 Coach Support,  360° Approach with Diet, Workout, Yoga & Naturopathy.</p>
                                    </div>
                                </Slider>    
                                <motion.div
                                    className="section_heading"
                                    data-scroll-speed="3"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 2, delay: 1 }}
                                >
                                    <Image className="img-fluid" src={ProjectBanner} alt="Project-Heading" />
                                </motion.div>
                                  <Slider
                                      asNavFor={nav2}
                                      ref={slider => (sliderRef1 = slider)}
                                      className="project_image_laptop"
                                  >
                                      <div>
                                            <Link to="https://lovely-rabanadas-bd7058.netlify.app/" target="_blank">
                                                <Image className="img-fluid project_1" src={ProjectImage1} alt="Project-Image" />
                                            </Link>    
                                      </div>
                                      <div>
                                            <Link to="https://rudraksh-resume.netlify.app/" target="_blank">
                                                <Image className="img-fluid project_1" src={ProjectImage2} alt="Project-Image" />
                                            </Link>    
                                      </div>
                                      <div>
                                            <Link to="https://main--sage-chebakia-9b1cd1.netlify.app/" target="_blank">
                                                <Image className="img-fluid project_1" src={ProjectImage3} alt="Project-Image" />
                                            </Link>    
                                      </div>
                                  </Slider> 
                            </div>    
                            <div className="project_img">
                                <Image className="img-fluid" src={Laptop} alt="laptop-image" />
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Projects