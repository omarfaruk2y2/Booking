import React from 'react';
import './FooterList.css';

const FooterList = () => {
  return (
    <div className='footer'>
        <div className='footerContainer'>
          <div className='footerList'>
              <h1 className='footerHeading'>Asia</h1>
              <span>Bangladesh</span>
              <span>India</span>
              <span>Germany</span>
              <span>England</span>
              <span>Canada</span>
              <span>USA</span>
          </div>
          <div className='footerList'>
              <h1 className='footerHeading'>Europe</h1>
              <span>Bangladesh</span>
              <span>India</span>
              <span>Germany</span>
              <span>England</span>
              <span>Canada</span>
              <span>USA</span>
          </div>
          <div className='footerList'>
              <h1 className='footerHeading'>American</h1>
              <span>Bangladesh</span>
              <span>India</span>
              <span>Germany</span>
              <span>England</span>
              <span>Canada</span>
              <span>USA</span>
          </div>
          <div className='footerList'>
              <h1 className='footerHeading'>Africa</h1>
              <span>Bangladesh</span>
              <span>India</span>
              <span>Germany</span>
              <span>England</span>
              <span>Canada</span>
              <span>USA</span>
          </div>
        </div>
        <h1 className='footerCopyright'>Copyright © 2022 <strong>Omar Faruk</strong>. All rights reserved.</h1>
    </div>
  )
}

export default FooterList;