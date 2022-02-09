import React from 'react';
import HandShakeForm from './HandShakeForm/HandShakeForm';
import ConnectSocially from './ConnectSocially/ConnectSocially';
import './Footer.css';

const Footer = () => {
  return (
    <div id="rootFooter">
        <div className='container py-3'>
          <div className='row'>
            <div className='col-0 col-lg-1 order-md-1 rootDesktop'></div>
            <div className='col-12 col-md-6 col-lg-4 pt-3 pb-2 order-2 order-md-2'>
              <div className='jumbotron mb-2 text-center py-1'>
                <span className='h2 text-hard'>Handshake message</span>
              </div>
              <div className='jumbotron px-3 py-3'>
                <HandShakeForm />
              </div>
            </div>
            <div className='col-0 col-lg-1 order-md-3 rootDesktop'></div>
            <div className='col-12 col-md-6 pt-3 pb-2 order-1 order-md-4'>
              <div className='h2'>Connect Socially!</div>
              <ConnectSocially />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Footer;
