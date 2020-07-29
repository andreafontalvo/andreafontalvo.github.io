import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import profileImg from '../assets/images/2020.jpg'
import '../assets/CSS/home.css'

// fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { fab, faLinkedin, faGithub, faInstagram, faFlickr, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typewriter from 'typewriter-effect';


/* YOUR DATA HERE ---------------------------------------------- */
const name = "Andrea Fontalvo";
const descrp = "Electronics engineer, tech and podcast enthusiast";
const ig = "https://www.instagram.com/andreacfontalvo/";
const linkedin = "https://www.linkedin.com/in/andreafontalvo/";
const github = "https://github.com/andreafontalvo";
const flickr = "https://www.flickr.com/photos/andreafontalvo";
const spotify = "https://open.spotify.com/show/66FB7COp91WSD0HY7SaDfI";
/*const profileLink = "http://andreafontalvo.com/about"; */

var footerText = "Made with 💜";

// eslint-disable-next-line

/* ------------------------------------------------------------------- */

export default class Home extends Component {

    render() {
        return (

            <div>
                <Container className="container">
                    <Row>
                        <Col sm={12} md={5} xs={12}>
                            <a className="link">
                                <img className="circle-img" src={profileImg} alt="profile-image" />
                            </a>
                        </Col>
                        <Col sm={12} md={7} xs={12}>
                            <div className="text-cont">
                                <h1 className="salute-text">
                                    Hi,
                                </h1>
                                <h1 className="name-text">I'm <b className="name-box"> {name} </b></h1>

                                <h3 className="description-text"> 
                                <Typewriter
                                        options={{
                                            strings: ['Electronics Engineer','Podcast enthusiast', 'Traveller and photo-taker'],
                                            autoStart: true,
                                            loop: true                                           
                                        }}
                                    />
                                </h3>
                            </div>
                        </Col>
                    </Row>
                    <br />                    
                    <br />
                    <Row>
                        <Col sm={12} md={12} xs={12}>
                            <div className="links-cont">
                                <a target="_blank" rel="noopener noreferrer" className="link-icon" href={ig}><FontAwesomeIcon icon={faInstagram} size="2x" /> </a>
                                <a target="_blank" rel="noopener noreferrer" className="link-icon" href={linkedin}><FontAwesomeIcon icon={faLinkedin} size="2x"/> </a>
                                <a target="_blank" rel="noopener noreferrer" className="link-icon" href={github}><FontAwesomeIcon icon={faGithub} size="2x" /> </a>
                                {/* <a target="_blank" rel="noopener noreferrer" className="link-icon" href={flickr}><FontAwesomeIcon icon={faFlickr} size="2x" /> </a> */}
                                <a target="_blank" rel="noopener noreferrer" className="link-icon" href={spotify}><FontAwesomeIcon icon={faSpotify} size="2x" /> </a>

                            </div>
                        </Col>
                    </Row>
                </Container>

                <footer className="footer-text">
                    {footerText}
                </footer>
            </div>

        )
    }
}