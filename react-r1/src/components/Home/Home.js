import React from 'react';
import { motion } from 'framer-motion';
import rootIllustration from '../../assets/rootIllustration.svg';
import "./Home.css"

const Home = () => {
  return (
    <div id="rootHome">
      <div className='container py-5'>
        <div className='row pt-3'>
          <div className='col-12 col-lg-6 order-1 order-lg-2 text-center pt-0 pt-md-3'>
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
          <div className='col-12 col-lg-6 order-2 order-lg-1'>
            <div className='row text-start text-md-center pt-0 pt-lg-5 text-center'>
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
               className='h1 rootHead'>Bonjour!</motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;