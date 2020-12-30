import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Cv from './pages/Cv';

function App() {
  return (
    <>
      <Router >
        <Navbar />
        <Switch>
          <Route path='/dor-cohen-website/' exact component={About} /> {/*this call to function 'Home' in pages->Home.js if the path are equals*/}
          <Route path='/skills' component={Skills} /> {/*this call to function 'Reports' in pages->Reports.js if the path are equals*/}
          <Route path='/projects' component={Projects} /> {/*this call to function 'Products' in pages->Products.js if the path are equals*/}
          <Route path='/contact' component={Contact} />
          <Route path='/cv' component={Cv} />
        </Switch>
      </Router>
    </>
  );
}

export default App;