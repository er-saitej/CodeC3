import React from 'react';
import "./Home.css"
import MovingParticles from './MovingParticles/MovingParticles';
import Illustration from './Illustration/Illustration';
import Greetings from './Greetings/Greetings';
import About from './About/About.js';
import Projects from './Projects/Projects';

const Home = () => {
  return (
    <div>
      <div id="rootHome">
        <div className='container py-5'>
          <MovingParticles />
          <div className='row pt-3'>
            <div className='col-12 col-lg-6 order-1 order-lg-2 text-center pt-0 pt-md-3'>
              <Illustration />
            </div>
            <div className='col-12 col-lg-6 order-2 order-lg-1'>
              <div className='row text-start text-md-center pt-0 pt-lg-5'>
                <Greetings />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="rootAbout" className="rootSection">
        <About />
      </div>
      <div id="rootProjects" className="rootSection">
        <Projects />
      </div>
    </div>
  )
}

export default Home;