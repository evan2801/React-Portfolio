import React, { Component } from 'react';

//import API functionn we need
import { getRandomDog } from './utils/API'

class Discover extends Component {
    state = {
        dogImage: '',
        matchCount: '0' ,
        hasMatched: false,
    };

    // on component mount, get random image
    componentDidMount() {
        this.getDogImage();
    }

    //API call to get random image
    getDogImage = () => {
        getRandomDog()
            .then(res => this.setState({ dogImage: res.data.message }))
            .catch(err => console.log(err));

    }

    //handleButtonClick method
    handleButtonClick = (votetype) => {
        //if upvote, or if downvote
        if (votetype ==='down'){
            return this.getDogImage()
        }else {
            this.handleUpVote()
        }
    };

    handleUpVote = () => {
        //generate a random number between 1 and 5;
        const randomNum = Math.floor(Math.random() * 5 ) + 1;

        //if randomNum is 3 you match
        if (randomNum === 3){
            this.setState({matchCount: this.state.matchCount + 1});
            this.getDogImage();
        }else {
            this.getDogImage();
        }
    };

    render() {
        return (
            <div className='container text-center'>
                <h1>Make a new friend</h1>
                <h2>Thumbs up on any pups you'd like to meet!</h2>

                <div className='row justify-content-center'>
                    <div className="col-12 col-md-8 col-lg-6">
                        <img className='img-fluid img-thumbnail d-block text-center' alt='Doggo' src={this.state.dogImage} />

                        <button className='btn-danger btn btn-lg m-5 p-4' onClick={() => this.handleButtonClick('down')}>👎🏻</button>
                        <button className='btn-success btn btn-lg m-5 p-4' onClick={() => this.handleButtonClick('up')}>👍🏻</button>

                        <h3>You've matched with {this.state.matchCount} doggos.</h3>
                  </div>
               </div>
            </div>
        );
    }
}


export default Discover;