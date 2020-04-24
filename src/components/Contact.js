import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './contact.css';

function Contact() {
    return (
        <>
            <Jumbotron className="bg-info text-light">
                <Container className="text-center">
                    <h1 className='display-3'>How to contact me</h1>
                </Container>
            </Jumbotron>

            <Container className="github">

                <h2>
                    Git-Hub:  
                </h2>
                
               <a  className="and" href="https://github.com/">Evan2801</a> 
            </Container>
            <Container className="email">
                <h2>
                    Email:
               </h2>
               <a  className="and" href="https://mail.google.com/mail/u/0/#inbox">evanstein28@gmail.com </a> 

                </Container>
            <Container className="linkin">
                <h2>
                    Linkedin:
                </h2>
              
                <a  className="and" href="https://www.linkedin.com/in/evan-stein-ba0010193?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BdiSwGsyLR82Z8okJwgCf0w%3D%3D">https://www.linkedin.com/in/evan-stein-ba0010193?</a> 
            </Container>

        </>

    )
}

export default Contact;