import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './about.css'
import bgImage from '../images/img.JPG';


function About() {
    return (
       <>
       <Jumbotron  className="bg-info text-light">
           <Container className="text-center">
               <h1 className='display-3'>Welcome to My Portfolio</h1>
           </Container>
       </Jumbotron>
      
       <Container>
          <img className='images' src={bgImage}/>
           
           <p>
       My name is Evan Stein, I am a graduate from Rutgers Coding Bootcamp for web development, and am eager to work. I am a good team player, and I am willing to be apart of something bigger than myself. My perfered Coding language is React, perferable front end But I can also do backend code. 
           </p>
         

       </Container>
       </>
    )
    
}

export default About;

