import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './Mystuff.css';
import password from '../images/password.png';
import weather from '../images/weatherpage.png';
import booklist from '../images/booklist.png';
import burger from '../images/burger.png';
import quize from '../images/quize.png';
import notes from '../images/notes.png';

function Mystuff() {
    return (
       <>
       <Jumbotron className="bg-info text-light">
           <Container className="text-center">
               <h1 className='display-3'>My Stuff</h1>
           </Container>
       </Jumbotron>
       <Container>
          <a className="blue" href=" https://evan2801.github.io/homework-03/"> <img className='password' src={password}/></a>
          <h2>Password Generator</h2>
          </Container>

          <Container>
          <a className="blue" href="https://evan2801.github.io/homework-06/"><img className='weather' src={weather}/></a>           
          <h2>Weather Page</h2>
          </Container>

          <Container>
          <a className="blue" href=" https://evansburgers.herokuapp.com/"> <img className='burger' src={burger}/></a>  
          <h2>Burger App</h2>
          </Container>

          <Container>
          <a className="blue" href=" https://evansnoteapp.herokuapp.com/"> <img className='notes' src={notes}/></a>  
          <h2>Note Taker</h2>
          </Container>

          <Container>
          <a className="blue" href="https://evan2801.github.io/homework-04/"><img className='quize' src={quize}/></a> 
          <h2>The Quize</h2>
          </Container>

          <Container>
          <a className="blue" href=" https://quiet-basin-62546.herokuapp.com/"><img className='booklist' src={booklist}/></a>
          <h2>Project 2</h2>
          </Container>
        

      
       </>
)
}

export default Mystuff;