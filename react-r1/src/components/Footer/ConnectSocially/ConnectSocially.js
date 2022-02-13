import React from 'react';
import { motion } from 'framer-motion';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { connections } from './SocialConnections';
import './ConnectSocially.css';

const ConnectSocially = () => {
  return (
    <div className='row py-3'>
      {connections.map((link)=>(
        <div key={link.name} className='col-6 col-lg-4 py-4'>
        <a href={link.url} target={link.target}>
          <motion.div className='text-center'
          drag
          dragConstraints={{
            right: 0,
            left: 0,
            top: 0,
            bottom: 0
          }}
          initial={{
            scale:1
          }}
          whileInView={{
            scale: [1, 0.5, 0.8, 0.7, 1],
          }}
          viewport={{once:true}}
          whileTap={{
            scale: 0.8,
            scaleZ: -3
          }}>
          {link.name==="Gmail"?<AlternateEmailRoundedIcon sx={{ fontSize: 50 }}/>:link.name==="GitHub"?<GitHubIcon sx={{ fontSize: 50 }}/>:link.name==="LinkedIn"?<LinkedInIcon sx={{ fontSize: 50 }}/>:link.name==="Twitter"?<TwitterIcon sx={{ fontSize: 50 }}/>:<InstagramIcon sx={{ fontSize: 50 }}/>}
          <h6 className='h5 pt-3'>{link.name}</h6>
          <h6 className='fst-italic'>{link.id}</h6>
        </motion.div>
        </a>
      </div>
      ))}
    </div>
  );
};

export default ConnectSocially;