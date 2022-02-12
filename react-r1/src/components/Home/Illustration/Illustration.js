import React from 'react';
import { motion } from 'framer-motion';
import rootIllustration from '../../../assets/rootIllustration.svg';
import './Illustration.css';

const Illustration = () => {
  return (
      <div>
          <div className='h5 text-start mt-5'>
            <span id="rootBadge" className="badge rounded-pill">
                    <div>I'm Consistent.</div>
            </span>
          </div>
          <motion.img
            drag
            dragConstraints={{
              top: 0, right: 0, left: 0, bottom: 0
            }}
            initial={{
              opacity: 1,
              y:-50
            }}
            animate={{
              opacity: 1,
              y:0
            }}
            transition={{
              duration: 2
            }}
            src={rootIllustration} className="rootIllustration" />
      </div>
  )
}

export default Illustration