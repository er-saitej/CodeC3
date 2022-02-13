import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ProejctsList } from './ProjectsList';
import './ProjectsData.css';

const ProjectsData = () => {
    let [leftWidth, setLeftWidth] = useState();
    let carouselRef = useRef();
    useEffect(()=>{
        setLeftWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }, []);
    return (
        <motion.div ref={carouselRef} className='main-carousel'>
            <motion.div className='inner-carousel'
                drag='x'
                dragConstraints={{
                    right: 0,
                    left: -leftWidth
                }}>
                {ProejctsList.map((element)=>(
                    <motion.div key={element.key} className='projectCard mx-1 mx-lg-2'
                        style={{backgroundImage:`url(${element.projectImage})`, backgroundSize: '500px 500px',  backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}
                        initial={{
                            scale: 1
                        }}
                        whileHover={{
                            scale: 1.01
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 60
                        }}
                        >
                        <div className='text-description justify-content-center align-middle px-2 py-1'>
                            {element.projectDescription}
                        </div>
                        <div className='text-footer h4 justify-content-center text-center'>
                            {element.projectName}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}

export default ProjectsData