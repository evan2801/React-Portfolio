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
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam alias veritatis tempora, ipsa vel dignissimos voluptas fugit nihil vitae quasi! Accusantium quas quasi veniam, facere est sint quam ipsa architecto.
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus illum iste esse exercitationem quo nobis. Eius a totam consequuntur placeat sunt molestias eos aperiam recusandae dolor quibusdam. Corrupti, ducimus eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus illum iste esse exercitationem quo nobis. Eius a totam consequuntur placeat sunt molestias eos aperiam recusandae dolor quibusdam. Corrupti, ducimus eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus illum iste esse exercitationem quo nobis. Eius a totam consequuntur placeat sunt molestias eos aperiam recusandae dolor quibusdam. Corrupti, ducimus eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus illum iste esse exercitationem quo nobis. Eius a totam consequuntur placeat sunt molestias eos aperiam recusandae dolor quibusdam. Corrupti, ducimus eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus illum iste esse exercitationem quo nobis. Eius a totam consequuntur placeat sunt molestias eos aperiam recusandae dolor quibusdam. Corrupti, ducimus eveniet.
           </p>
         

       </Container>
       </>
    )
    
}

export default About;

