import { Container, Row, Col } from "react-bootstrap";
import './footer.css'

import Linkedin from '../../assets/img/icons/linkedin.svg';
import github from '../../assets/img/icons/github.svg';
import instagram from '../../assets/img/icons/instagram.svg';
import cv from '../../assets/img/icons/cv.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center" id="mainFooter">
          {/* 
          <Col size={12} sm={6}>

          </Col> */}
          <Col size={12} sm={6} className="text-center text-sm-end" id="innerContainer">
            <div className="social-icon">
              <a href='https://www.linkedin.com/in/elmer-jose-mu%C3%B1oz-zu%C3%B1iga-563022240/'><img alt='linkedin' src={Linkedin}></img></a>
              <a href='https://github.com/Ejmz216'><img alt='git' src={github}></img></a>
              <a href='https://www.instagram.com/eljose__mz/'><img alt='instagram' src={instagram}></img></a>
              <a href='https://drive.google.com/file/d/19dX0z1LboQlzlb_PKYJ42B3DBXcNOp6u/view?usp=sharing'><img alt='cv' src={cv}></img></a>
            </div>
            <p>Made with ⌚&💙 by Elmer Muñoz - Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}