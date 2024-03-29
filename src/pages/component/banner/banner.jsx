import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'
import { Logo, BannerImage } from '../../../assets/images/img'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import './banner.scss'

function Banner() {
  return (
    <>
        <section className="portfolio_banner" data-scroll-container>
              <Navbar expand="lg" className="bg-body-tertiary">
                  <Container>
                        <Navbar.Brand href="/">
                          <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 2, ease: 'easeInOut', delay: 1 }}
                            >
                                <Image className="img-fluid" src={Logo} alt="main-logo" />
                            </motion.div>    
                      </Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ duration: 2, ease: 'easeInOut', delay: 1 }}
                                >
                                    <Link to="#" className="global_button">
                                        Resume
                                    </Link>
                                </motion.div>    
                          </Nav>
                      </Navbar.Collapse>
                  </Container>
              </Navbar>
            <div className="banner_section">
                <Container>
                    <Row>
                        <Col xxl="6" md="12" xs="12">
                            <div className="content" data-scroll data-scroll-speed="4">
                                <h2>Ashish Jain</h2>
                                <h1><span className="green">Frontend</span> <span className="blue">Developer</span></h1>
                                <p>Developing and designing things for the web since 2017. Currently
                                      available full-time and looking for new job opprtunities</p>
                                <div className="navigation">
                                    <Button variant="primary" className="global_button">Get In Touch</Button>      
                                    <Link to="#">Work
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <path d="M20.8146 11.648L14.3979 18.0647C14.225 18.2317 13.9935 18.3241 13.7531 18.322C13.5128 18.3199 13.2829 18.2235 13.1129 18.0535C12.943 17.8836 12.8466 17.6537 12.8445 17.4133C12.8424 17.173 12.9348 16.9414 13.1018 16.7685L17.9537 11.9166H1.83317C1.59006 11.9166 1.3569 11.82 1.18499 11.6481C1.01308 11.4762 0.916504 11.2431 0.916504 11C0.916504 10.7568 1.01308 10.5237 1.18499 10.3518C1.3569 10.1799 1.59006 10.0833 1.83317 10.0833H17.9537L13.1018 5.23137C13.0142 5.14681 12.9444 5.04566 12.8963 4.93382C12.8483 4.82198 12.823 4.7017 12.8219 4.57999C12.8209 4.45827 12.8441 4.33757 12.8902 4.22491C12.9363 4.11226 13.0043 4.00991 13.0904 3.92384C13.1765 3.83777 13.2788 3.7697 13.3915 3.72361C13.5041 3.67752 13.6248 3.65433 13.7465 3.65539C13.8683 3.65645 13.9885 3.68173 14.1004 3.72978C14.2122 3.77782 14.3134 3.84765 14.3979 3.9352L20.8146 10.3519C20.9864 10.5238 21.083 10.7569 21.083 11C21.083 11.243 20.9864 11.4761 20.8146 11.648Z" fill="white" />
                                        </svg>
                                    </span>
                                    </Link>
                                </div>    
                            </div>
                        </Col>
                        <Col xxl="6" md="12" xs="12">
                            <motion.div
                                initial={{ opacity: 0, x: 360 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{duration: 2, ease: 'easeInOut', delay: 2}}
                                className="img_banner"
                            >
                                <Image className="img-fluid" src={BannerImage} alt="Banner-Image"/>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>    
    </>
  )
}

export default Banner