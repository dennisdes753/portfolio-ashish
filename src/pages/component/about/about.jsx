import React from 'react'
import {Container, Row, Col, Image, Button} from 'react-bootstrap'
import { AboutImage } from '../../../assets/images/img'
import {motion} from 'framer-motion'
import './about.scss'

const About = () => {
    const aboutSection ={
        hidden :{
            opacity : 0,
            x: -360
        },
        visible : {
            opacity : 1,
            x : 0,
            transition : {
                duration: 2,
                ease: 'easeInOut'
            }
        }
    }
  return (
    <>
          <section className="about_section" data-scroll-container variants={aboutSection} initial="hidden" animate="show">
            <Container>
                <Row>
                    <Col xxl="6" md="12" xs="12">
                        <motion.div
                            className="image"
                            data-scroll
                            data-scroll-speed="2"
                            initial={{ opacity: 0, x: -360 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1.5}}
                        >
                            <Image className="img-fluid" src={AboutImage} alt="About Image"/>
                        </motion.div>
                    </Col>
                    <Col xxl="6" md="12" xs="12">
                        <motion.div
                            className="content"
                            data-scroll
                            data-scroll-speed="-2"
                            data-scroll-direction= "horizontal"
                        >
                            <h4><span className="green">About</span> <span className="blue">Me</span></h4>
                            <p>Passionate frontend developer with a keen eye for detail and a love for crafting elegant user experiences. With a solid foundation in HTML, CSS, and JavaScript, I thrive on transforming design concepts into responsive and dynamic web interfaces. Experienced in utilizing modern frontend frameworks like React and Vue.js to create scalable and maintainable code. Collaborative by nature, I enjoy working closely with designers and backend developers to deliver seamless solutions. Continuously learning and adapting to emerging technologies, I am dedicated to staying at the forefront of web development trends. Committed to excellence, I am driven to create impactful digital experiences that delight users and exceed expectations.</p>
                            <Button variant="primary" className="global_button">Get In Touch</Button>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default About