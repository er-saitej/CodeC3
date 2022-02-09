import React from 'react';
import { motion } from 'framer-motion';
import HandShakeForm from './HandShakeForm/HandShakeForm';
import ConnectSocially from './ConnectSocially/ConnectSocially';
import './Footer.css';

const Footer = () => {
  return (
    <div id="rootFooter">
        <div className='container py-5'>
          <div className='row pt-3'>
            <div className='col-0 col-lg-1 order-md-1 rootDesktop'></div>
            <div className='col-12 col-md-6 col-lg-4 pt-3 pb-2 order-2 order-md-2'>
              <div className='jumbotron mb-2 text-center py-1'>
                <span className='h2 text-hard'>Handshake message</span>
              </div>
              <motion.div className='jumbotron px-3 py-3'
                initial={{
                  opacity: 0.3
                }}
                animate={{
                  opacity: 1
                }}
                transition={{
                  type:"spring",
                  stiffness:40
                }}
              >
                <HandShakeForm />
              </motion.div>
            </div>
            <div className='col-0 col-lg-1 order-md-3 rootDesktop'></div>
            <div className='col-12 col-md-6 pt-3 pb-2 order-1 order-md-4'>
              <div className='row'>
                <div className='col-8 col-md-9'>
                  <div className='h2'>Connect Socially!</div>
                </div>
                <div className='col-4 col-md-3'>
                  <div className='h5 text-center'>
                    <span id="rootBadge" className="badge rounded-pill">
                      <div>I'm Flexible.</div>
                    </span>
                  </div>
                </div>
              </div>
              <div className='row'>
                <ConnectSocially />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Footer;
