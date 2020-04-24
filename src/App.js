import React from 'react';
// import router components
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import UI components
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Mystuff from './components/Mystuff';

//import bootstrap styleshhet for all pages
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/mystuff' component={Mystuff} />
          <Route render={() => <h1 className='text-center'>💩 Wrong Page!</h1>} />
        </Switch>
      </>
    </Router>
  );
}
export default App;
