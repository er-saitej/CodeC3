import React from 'react';
import Particles from 'react-tsparticles';

const MovingParticles = () => {
  return (
    <Particles
      id="rootParticles"
      options={{
        fpsLimit: 60,
        particles: {
          color: {
            value: "#C4DFE6",
          },
          links: {
            color: "#C4DFE6",
            distance: 60,
            enable: true,
            opacity: 0.5,
            width: 0.5,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 15,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
            stroke: {
                width: 1,
                color: '#C4DFE6'
            }
          },
          size: {
            random: true,
            value: 1,
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default MovingParticles