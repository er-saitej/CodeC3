import React from 'react';
import { motion } from 'framer-motion';
import ProjectsData from './ProjectsData/ProjectsData';
import './Projects.css';

const Projects = () => {
  return (
    <div className="container pb-5">
      <div className='row'>
        <div className='col-12 col-md-8 order-2 order-md-1 py-5'>
            <ProjectsData />
        </div>
        <div className='col-12 col-md-4 order-1 order-md-2 d-flex align-items-center text-center'>
            <motion.div className='text-center align-middle rootText display-3 justify-content-center text-center'
                initial={{
                    x: 50
                }}
                whileInView={{
                    x:0
                }}
                transition={{
                    type: 'spring',
                    stiffness: 60
                }}>Projects</motion.div>
        </div>
      </div>
    </div>
  )
}

export default Projects