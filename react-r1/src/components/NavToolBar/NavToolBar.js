import React, { useState } from 'react';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { TrinityRingsSpinner } from 'react-epic-spinners';
import { links } from './NavLinks';
import './NavToolBar.css';

const NavToolBar = (props) => {
    let [arrowDirection, setArrowDirection] = useState(false);
    let handleArrowClick = () => {
        setArrowDirection(!arrowDirection);
    }
  return (
    <nav id="rootNavbar" className="navbar navbar-expand-md fixed-top" aria-label="Root Navbar">
        <div className="container">
        <div className="rootDesktop"><TrinityRingsSpinner color="#C4DFE6" size="30" animationDuration={7000} /></div>
        <span className="navbar-brand clicker px-0 px-lg-2">{props.brandName}</span>
        <span onClick={()=>handleArrowClick()} className="navbar-toggler clicker" data-bs-toggle="collapse" data-bs-target="#navLinks" aria-controls="navLinks" aria-expanded="false" aria-label="Navbar Links Arrow">
            {arrowDirection?<ArrowCircleUpIcon className="rootArrowStyles" />:<ArrowCircleDownIcon className="rootArrowStyles" />}
        </span>

        <div className="collapse navbar-collapse" id="navLinks">
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-md-0">
                {links.map((element)=>(
                    <li key={element.linkHead} className="nav-item mx-lg-5 mx-md-3 mx-0 my-2 my-md-0 clicker">{element.linkHead}</li>
                ))}
            </ul>
            <div className="d-grid gap-2">
              <button type="button" name="connect" id="connect" className="btn connectBtn px-5 px-md-3 px-lg-5 clicker">Connect</button>
            </div>
        </div>
        </div>
    </nav>
  );
};

NavToolBar.defaultProps = {
    brandName: 'Portfolio'
}

export default NavToolBar;
