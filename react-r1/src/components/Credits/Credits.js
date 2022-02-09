import React from 'react';
import './Credits.css';

const Credits = () => {
    let date = new Date();
    let year = date.getFullYear();
  return (
    <div id="rootCredits">
        <div className='container'>
            <div className='text-center py-2'>
                <span>Designed and developed by Sai Tej Sunkara. &copy; {year}</span>
            </div>
        </div>
    </div>
  );
};

export default Credits;
