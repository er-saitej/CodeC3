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
                    <div key={element.id} className='card projectCard mx-1 mx-lg-2'>
                        <div className='card-body text-description justify-content-center align-middle'>
                            {element.projectDescription}
                        </div>
                        <div className='card-footer text-footer h4 justify-content-center text-center'>
                            {element.projectName}
                        </div>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
}

export default ProjectsData