import React from 'react';
import { motion } from 'framer-motion';
import { Text } from './AboutText';
import './About.css';

const About = () => {
  return (
    <div className="container py-5">
      <div className='row'>
        <motion.div className='display-3 rootText'
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0
          }}
          initial={{
            x: -100
          }}
          whileInView={{
            x: 0
          }}
          transition={{
            type: 'spring',
            stiffness: 60
          }}>Portrait</motion.div>
      </div>
      <div className='row py-4'>
        <motion.div className='lead px-3'
        initial={{
          y: 200
        }}
        whileInView={{
          y: 0
        }}
        whileHover={{
          scale: 1.01
        }}
        viewport={{once:true}}
        transition={{
          type: 'spring',
          stiffness: 80
        }}>{Text.map((textElement)=>(
          <div key={textElement.key} className='lead leadText py-3 px-2 px-md-2'>{textElement.displayText}</div>
        ))}</motion.div>
      </div>
    </div>
  )
}

export default About