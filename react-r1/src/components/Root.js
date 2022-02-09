import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import NavToolBar from './NavToolBar/NavToolBar';
import Footer from './Footer/Footer';
import Credits from './Credits/Credits';
import './Root.css';

const Root = () => {
  let brand = "Sai Tej Sunkara"
  return (
    <div id="root">
      <div id="rootNav">
        <NavToolBar brandName={brand} />
      </div>
      <div id="rootFooter">
        <Footer />
      </div>
      <div id="rootCredits">
        <Credits />
      </div>
    </div>
  );
};

export default Root;
