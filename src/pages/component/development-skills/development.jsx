import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import { tech1, tech2, tech3, tech4, tech5, tech6, tech7, MainCharacter } from '../../../assets/images/img'
import {motion} from 'framer-motion'
import './development.scss'

const Development = () => {
  return (
    <>
        <section className="development_section">
            <Container>
                <Row>
                    <Col xxl="6" lg="6" md="12" xs="12">
                        <motion.div
                            className="development_content"
                            data-scroll
                            data-scroll-speed="-2"
                            data-scroll-direction="horizontal"
                        >
                            <h4>
                                <span className="green">Development</span> <span className="blue">Skills</span>
                            </h4>
                            <h6>I really like Air Jordan Shoes</h6>
                            <div className="line_verticle"></div>
                            <p>Designed by Ashish & Rudraksh</p>
                        </motion.div>
                    </Col>
                    <Col xxl="6" lg="6" md="12" xs="12">
                        <motion.div
                            className="development_img"
                            data-scroll
                            data-scroll-speed="2"
                            data-scroll-direction="horizontal"
                        >
                            <Image className="img-fluid tech_logo tech_1" src={tech1} alt="Tech-1"/>
                            <Image className="img-fluid tech_logo tech_2" src={tech2} alt="Tech-2" />
                            <Image className="img-fluid tech_logo tech_3" src={tech3} alt="Tech-3" />
                            <Image className="img-fluid tech_logo tech_4" src={tech4} alt="Tech-4" />
                            <Image className="img-fluid tech_logo tech_5" src={tech5} alt="Tech-5" />
                            <Image className="img-fluid tech_logo tech_6" src={tech6} alt="Tech-6" />
                            <Image className="img-fluid tech_logo tech_7" src={tech7} alt="Tech-7" />
                            <Image className="img-fluid main_img" src={MainCharacter} alt="MainCharacter" />
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Development