import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import './Greetings.css';

const Greetings = () => {
  return (
    <div>
      <motion.div
               initial={{
                 scale: 1
               }}
               animate={{
                 scale: [1, 1.1, 1]
               }}
               whileTap={{
                scale: [1, 1.1, 1]
               }}
               transition={{
                type: 'tween',
                duration: 2
               }}
               className='display-1 rootHead'>Bonjour!</motion.div>
      <div className='row mt-5'>
        <div className='col-2 text-end p-0 pt-1'>
          <div className='typerText'>I'm &nbsp;</div>
        </div>
        <div className='col-10 text-start p-0 pt-1'>
        <Typewriter
          options={{
            strings: ['an Algorithm Engineer.', 'a Software Developer.', 'a Machine Learning Architect.', 'a Web Designer.'],
            autoStart: true,
            loop: true,
            skipAddStyles: true,
            cursorClassName: 'typerText',
            wrapperClassName: 'typerText'
          }}/>
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-12 text-center'>
            <button type="button" name="resume" id="resume" className="btn connectBtn"><span className='display-6 px-4 px-md-5'>Resume</span></button>
        </div> 
      </div>
    </div>
  )
}

export default Greetings